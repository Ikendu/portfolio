<?php
// Include database configuration
require_once __DIR__ . '/../config.php';

// Get the request method
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Optional: Add authentication here
$auth_token = $_GET['token'] ?? '';
$admin_token = 'your-secret-admin-token'; // Change this to a secure token

if ($auth_token !== $admin_token) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit();
}

// Get contacts with optional filtering
$status_filter = isset($_GET['status']) ? sanitize($_GET['status']) : '';
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 50;
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;

$query = "SELECT id, name, email, phone, message, status, created_at FROM contacts";

if (!empty($status_filter)) {
    $query .= " WHERE status = '" . sanitize($status_filter) . "'";
}

$query .= " ORDER BY created_at DESC LIMIT $limit OFFSET $offset";

$result = $conn->query($query);

if (!$result) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
    exit();
}

$contacts = [];
while ($row = $result->fetch_assoc()) {
    $contacts[] = $row;
}

// Get total count
$count_query = "SELECT COUNT(*) as total FROM contacts";
if (!empty($status_filter)) {
    $count_query .= " WHERE status = '" . sanitize($status_filter) . "'";
}

$count_result = $conn->query($count_query);
$count_row = $count_result->fetch_assoc();

echo json_encode([
    'success' => true,
    'data' => $contacts,
    'total' => $count_row['total'],
    'limit' => $limit,
    'offset' => $offset
]);
?>
