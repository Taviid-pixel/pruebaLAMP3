document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
  
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      const correo = document.getElementById("correo").value.trim();
      const contrasena = document.getElementById("contrasena").value;
  
      // Validar campos vacíos
      if (!correo || !contrasena) {
        return Swal.fire({
          title: 'Campos vacíos',
          text: 'Por favor llena todos los campos',
          icon: 'warning',
          background: '#202020',
          color: '#fff'
        });
      }
  
      // Validar formato de correo
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
      if (!correoValido) {
        return Swal.fire({
          title: 'Correo inválido',
          text: 'Ingresa un correo con formato correcto',
          icon: 'error',
          background: '#202020',
          color: '#fff'
        });
      }
  
      // Verificar usuario guardado
      const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
  
      if (
        usuarioGuardado &&
        correo === usuarioGuardado.correo &&
        contrasena === usuarioGuardado.contrasena
      ) {
        Swal.fire({
          title: '¡Bienvenido!',
          text: `Hola, ${usuarioGuardado.nombre}`,
          icon: 'success',
          background: '#202020',
          color: '#fff',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          window.location.href='inicio.html';
        });
      } else {
        Swal.fire({
          title: 'Error de acceso',
          text: 'Correo o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo',
          background: '#202020',
          color: '#fff'
        });
      }
    });
});