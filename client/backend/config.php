<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'morelink_port');
define('DB_PASSWORD', '96521Aa@!@!@!');
define('DB_NAME', 'morelink_portfolio');
define('DB_PORT', 3306);

// Set response headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
    exit();
}

// Set charset to utf8
$conn->set_charset('utf8mb4');

// Function to sanitize input
function sanitize($input) {
    global $conn;
    return $conn->real_escape_string(htmlspecialchars(strip_tags($input)));
}

// Function to upload image
function uploadImage($file) {
    $upload_dir = __DIR__ . '/uploads/testimonials/';
    
    // Create directory if it doesn't exist
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }
    
    $file_name = $file['name'];
    $file_size = $file['size'];
    $file_tmp = $file['tmp_name'];
    $file_type = $file['type'];
    
    // Allowed file types
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif'];
    $max_size = 2 * 1024 * 1024; // 2MB
    
    // Validate file
    if (!in_array($file_type, $allowed_types)) {
        return ['success' => false, 'message' => 'Invalid file type. Only JPG, PNG, and GIF are allowed.'];
    }
    
    if ($file_size > $max_size) {
        return ['success' => false, 'message' => 'File size exceeds 2MB limit.'];
    }
    
    // Generate unique filename
    $unique_name = uniqid('testimonial_', true) . '.' . pathinfo($file_name, PATHINFO_EXTENSION);
    $upload_path = $upload_dir . $unique_name;
    
    // Move uploaded file
    if (move_uploaded_file($file_tmp, $upload_path)) {
        return [
            'success' => true,
            'path' => 'uploads/testimonials/' . $unique_name,
            'url' => 'https://portfolio.morelinks.com.ng/api/uploads/testimonials/' . $unique_name
        ];
    } else {
        return ['success' => false, 'message' => 'Failed to upload file.'];
    }
}

// Function to get file URL
function getFileUrl($relative_path) {
    if (empty($relative_path)) {
        return null;
    }
    return 'https://portfolio.morelinks.com.ng/api/' . $relative_path;
}
?>
