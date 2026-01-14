<?php
// Include database configuration
require_once __DIR__ . '/../config.php';

// Get the request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['id'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Contact ID is required']);
    exit();
}

$id = intval($input['id']);

// Delete contact
$delete_query = "DELETE FROM contacts WHERE id = ?";
$stmt = $conn->prepare($delete_query);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
    exit();
}

$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Contact deleted successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to delete contact']);
}

$stmt->close();
?>
