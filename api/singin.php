<?php
header('Content-Type: application/json');
require 'db.php'; 
header("Access-Control-Allow-Origin: *");
                            
try {
    $stmt = $pdo->query("SELECT id, email FROM users ORDER BY id DESC");
    $users = $stmt->fetchAll();
    echo json_encode($users);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([]);
}
?>
                           