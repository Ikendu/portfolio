<?php
declare(strict_types=1);

require_once __DIR__ . '/../config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

header('Content-Type: application/json');

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Read JSON input
$data = json_decode(file_get_contents('php://input'), true);

if (
    empty($data['name']) ||
    empty($data['email']) ||
    empty($data['message'])
) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
    exit;
}

// Sanitize
$name    = sanitize($data['name']);
$email   = sanitize($data['email']);
$phone   = !empty($data['phone']) ? sanitize($data['phone']) : 'Not provided';
$message = sanitize($data['message']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$ip_address = getClientIP();
$user_agent = substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500);

// Save to DB
$sql = "INSERT INTO contacts (name, email, phone, message, ip_address, user_agent)
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error']);
    exit;
}

$stmt->bind_param('ssssss', $name, $email, $phone, $message, $ip_address, $user_agent);

if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save message']);
    exit;
}

$contact_id = $stmt->insert_id;
$stmt->close();

try {
    /** ================= ADMIN EMAIL ================= */
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'mail.morelinks.com.ng';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'admin@morelinks.com.ng';
    $mail->Password   = SMTP_PASSWORD; // from config.php
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Debug (disable in production)
    // $mail->SMTPDebug = 2;

    $mail->setFrom('admin@morelinks.com.ng', 'Portfolio Contact');
    $mail->addAddress('davidaniedexp@gmail.com', 'David Aniede');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Message - {$name}";
    $mail->Body = "
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
        <p><strong>Reference ID:</strong> #{$contact_id}</p>
        <p><strong>IP:</strong> {$ip_address}</p>
    ";
    $mail->AltBody = "Message from {$name}\n\n{$message}";

    $mail->send();

    /** ================= USER CONFIRMATION EMAIL ================= */
    $userMail = new PHPMailer(true);
    $userMail->isSMTP();
    $userMail->Host       = 'mail.morelinks.com.ng';
    $userMail->SMTPAuth   = true;
    $userMail->Username   = 'admin@morelinks.com.ng';
    $userMail->Password   = SMTP_PASSWORD;
    $userMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $userMail->Port       = 465;

    $userMail->setFrom('admin@morelinks.com.ng', 'David Aniede');
    $userMail->addAddress($email, $name);

    $userMail->isHTML(true);
    $userMail->Subject = "We received your message";
    $userMail->Body = "
        <p>Hi {$name},</p>
        <p>Thank you for contacting me. I have received your message and will respond shortly.</p>
        <p><strong>Reference ID:</strong> #{$contact_id}</p>
        <p>Best regards,<br>David Aniede</p>
    ";
    $userMail->AltBody = "Thank you for contacting me.\nReference ID: {$contact_id}";

    $userMail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully',
        'contact_id' => $contact_id
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Message saved but email failed',
        'error' => $e->getMessage(),
        'contact_id' => $contact_id
    ]);
}

/** ================= HELPERS ================= */
function getClientIP(): string {
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
}
