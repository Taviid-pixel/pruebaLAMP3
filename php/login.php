<?php
include 'conexion.php';

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$sql = "SELECT * FROM usuarios WHERE usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$resultado = $stmt->get_result();

if ($fila = $resultado->fetch_assoc()) {
    if (password_verify($contrasena, $fila['contrasena'])) {
        session_start();
        $_SESSION['usuario'] = $usuario;
        echo "<script>alert('¡Bienvenido $usuario!'); window.location.href='../inicio2.html';</script>";
    } else {
        echo "<script>alert('Contraseña incorrecta'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Usuario no encontrado'); window.history.back();</script>";
}
?>
