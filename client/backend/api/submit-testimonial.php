<?php
require_once __DIR__ . '/../config.php';

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// Get form data
$name = isset($_POST['name']) ? sanitize($_POST['name']) : '';
$role = isset($_POST['role']) ? sanitize($_POST['role']) : '';
$company = isset($_POST['company']) ? sanitize($_POST['company']) : '';
$feedback = isset($_POST['feedback']) ? sanitize($_POST['feedback']) : '';

// Validate required fields
if (empty($name) || empty($role) || empty($company) || empty($feedback)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit();
}

// Validate feedback length
if (strlen($feedback) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Feedback must be at least 10 characters long.']);
    exit();
}

// Handle image upload
$image_path = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $upload_result = uploadImage($_FILES['image']);
    if (!$upload_result['success']) {
        http_response_code(400);
        echo json_encode($upload_result);
        exit();
    }
    $image_path = $upload_result['path'];
}

// Insert into database
$stmt = $conn->prepare("
    INSERT INTO testimonials (name, role, company, feedback, image_path, created_at)
    VALUES (?, ?, ?, ?, ?, NOW())
");

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
    exit();
}

$stmt->bind_param('sssss', $name, $role, $company, $feedback, $image_path);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Testimonial submitted successfully!',
        'data' => [
            'id' => $stmt->insert_id,
            'name' => $name,
            'role' => $role,
            'company' => $company,
            'feedback' => $feedback,
            'image' => $image_path ? getFileUrl($image_path) : null,
            'created_at' => date('Y-m-d H:i:s')
        ]
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to submit testimonial: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
