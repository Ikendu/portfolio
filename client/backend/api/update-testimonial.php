<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid input']);
        exit();
    }

    $id = isset($input['id']) ? intval($input['id']) : null;
    $name = isset($input['name']) ? sanitize($input['name']) : null;
    $role = isset($input['role']) ? sanitize($input['role']) : null;
    $company = isset($input['company']) ? sanitize($input['company']) : null;
    $feedback = isset($input['feedback']) ? sanitize($input['feedback']) : null;

    if (!$id || !$name || !$role || !$company || !$feedback) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit();
    }

    if (strlen($feedback) < 10) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Feedback must be at least 10 characters']);
        exit();
    }

    $stmt = $conn->prepare("UPDATE testimonials SET name = ?, role = ?, company = ?, feedback = ?, updated_at = NOW() WHERE id = ?");
    
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Database error']);
        exit();
    }

    $stmt->bind_param("ssssi", $name, $role, $company, $feedback, $id);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Testimonial updated successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to update testimonial']);
    }
    
    $stmt->close();
    $conn->close();
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
