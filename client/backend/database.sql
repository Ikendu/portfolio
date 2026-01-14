-- Create Database
CREATE DATABASE IF NOT EXISTS morelink_portfolio;
USE morelink_portfolio;

-- Create Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    feedback LONGTEXT NOT NULL,
    image_path VARCHAR(500),
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample testimonials (optional)
INSERT INTO testimonials (name, role, company, feedback, status) VALUES
(
    'Alex Johnson',
    'Project Manager',
    'Tech StartUp',
    'David delivered an exceptional React application that exceeded our expectations. His attention to detail and problem-solving skills were invaluable.',
    'approved'
),
(
    'Sarah Chen',
    'CTO',
    'Digital Solutions Inc',
    'Working with David on our full-stack project was a great experience. He brings both technical expertise and excellent communication.',
    'approved'
),
(
    'Mike Williams',
    'Team Lead',
    'Creative Agency',
    'David\'s frontend skills transformed our vision into reality. He\'s professional, reliable, and a great team player.',
    'approved'
);
