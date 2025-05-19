<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Ajusta el * por tu dominio para mayor seguridad
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Para preflight OPTIONS request de CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Leer JSON del cuerpo
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Conexión
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

// Validaciones
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}
if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(['error' => 'La contraseña debe tener al menos 6 caracteres']);
    exit;
}

// Comprobar si ya existe email
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la preparación de la consulta']);
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(400);
    echo json_encode(['error' => 'El email ya está registrado']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Insertar usuario
$hash = password_hash($password, PASSWORD_BCRYPT);
$stmt = $conn->prepare("INSERT INTO users (email, password_hash) VALUES (?, ?)");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la preparación de la consulta de inserción']);
    exit;
}
$stmt->bind_param("ss", $email, $hash);

if ($stmt->execute()) {
    echo json_encode(['success' => 'Usuario registrado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al registrar usuario']);
}

$stmt->close();
$conn->close();
?>
