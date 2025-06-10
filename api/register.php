<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Leer el JSON del body
$input = json_decode(file_get_contents('php://input'), true);

$email     = $input['email']     ?? '';
$password  = $input['password']  ?? '';
$firstName = $input['firstName'] ?? '';
$lastName  = $input['lastName']  ?? '';
$phone     = $input['phone']     ?? '';
$codigo    = $input['codigo']    ?? '';

// 1. Validaciones básicas
if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($password) < 6
) {
    http_response_code(400);
    echo json_encode(['error' => 'Email o contraseña inválidos.']);
    exit;
}

if (
    empty($firstName) ||
    empty($lastName)  ||
    empty($phone)     ||
    empty($codigo)
) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos obligatorios del usuario.']);
    exit;
}

// 2. Conexión a la base de datos
$host   = "srv2000.hstgr.io";
$user   = "u685798012_plutitoymaxibr";
$pass   = "scottex88*D";
$dbname = "u685798012_restaurante";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar con la base de datos']);
    exit;
}

// 3. Comprueba si el email ya existe
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'El usuario ya está registrado.']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// 4. Comprueba si el código existe y está activo
$stmt = $conn->prepare("SELECT codigo FROM codigo WHERE codigo = ? AND activo = TRUE");
$stmt->bind_param("s", $codigo);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows === 0) {
    http_response_code(400);
    echo json_encode(['error' => 'El código proporcionado no es válido o ya fue usado.']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// 5. Hashea la contraseña
$hash = password_hash($password, PASSWORD_BCRYPT);

// 6. Inserta al nuevo usuario
$stmt = $conn->prepare("
    INSERT INTO users 
      (email, password_hash, first_name, last_name, phone, codigo)
    VALUES (?, ?, ?, ?, ?, ?)
");
$stmt->bind_param("ssssss", $email, $hash, $firstName, $lastName, $phone, $codigo);

if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al registrar usuario.']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// 7. Desactiva el código usado
$stmt = $conn->prepare("UPDATE codigo SET activo = FALSE WHERE codigo = ?");
$stmt->bind_param("s", $codigo);
$stmt->execute();
$stmt->close();

// 8. Respuesta exitosa
http_response_code(201);
echo json_encode([
    'success' => true,
    'message' => 'Usuario registrado y código desactivado correctamente.'
]);

$conn->close();
