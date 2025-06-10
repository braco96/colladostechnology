<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$host = "srv2000.hstgr.io";
$user = "u685798012_plutitoymaxibr";
$pass = "scottex88*D";
$dbname = "u685798012_restaurante";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar con la base de datos']);
    exit;
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}
if (empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'La contraseña es obligatoria']);
    exit;
}

// Buscar usuario
$stmt = $conn->prepare("SELECT id, password_hash FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no encontrado']);
    exit;
}

$user = $result->fetch_assoc();
if (!password_verify($password, $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Contraseña incorrecta']);
    exit;
}

// Autenticación exitosa
echo json_encode(['success' => 'Inicio de sesión exitoso', 'userId' => $user['id']]);

$stmt->close();
$conn->close();
?>
