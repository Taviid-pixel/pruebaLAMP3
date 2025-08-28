<?php
include 'conexion.php';

$usuario = $_POST['usuario'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario, $contrasena);

if ($stmt->execute()) {
    echo "<script>alert('¡Usuario registrado!'); window.location.href='../inicio2.html';</script>";
} else {
    echo "<script>alert('Error: usuario existente.'); window.history.back();</script>";
}
?>
