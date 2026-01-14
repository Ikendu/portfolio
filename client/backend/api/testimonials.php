<?php
require_once __DIR__ . '/../config.php';

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// Get query parameters
$page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$limit = isset($_GET['limit']) ? min(100, max(1, intval($_GET['limit']))) : 10;
$offset = ($page - 1) * $limit;

// Fetch testimonials
$result = $conn->query("
    SELECT id, name, role, company, feedback, image_path, created_at 
    FROM testimonials 
    ORDER BY created_at DESC 
    LIMIT $limit OFFSET $offset
");

if (!$result) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
    exit();
}

$testimonials = [];
while ($row = $result->fetch_assoc()) {
    $row['image'] = $row['image_path'] ? getFileUrl($row['image_path']) : null;
    $row['avatar'] = null; // Can be set on frontend
    unset($row['image_path']); // Remove path, use URL instead
    $testimonials[] = $row;
}

// Get total count
$count_result = $conn->query("SELECT COUNT(*) as total FROM testimonials");
$count_row = $count_result->fetch_assoc();
$total = $count_row['total'];
$total_pages = ceil($total / $limit);

http_response_code(200);
echo json_encode([
    'success' => true,
    'data' => $testimonials,
    'pagination' => [
        'page' => $page,
        'limit' => $limit,
        'total' => $total,
        'total_pages' => $total_pages
    ]
]);

$conn->close();
?>
