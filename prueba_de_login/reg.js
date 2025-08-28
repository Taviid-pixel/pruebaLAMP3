document.addEventListener("DOMContentLoaded", () => {
    const registroBtn = document.getElementById("registroBtn");
  
    registroBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const contrasena = document.getElementById("contrasena").value;
  
      // Validar campos vacíos
      if (!nombre || !correo || !contrasena) {
        return Swal.fire({
          title: 'Campos incompletos',
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
          title: 'Correo no válido',
          text: 'Por favor ingresa un correo correcto',
          icon: 'error',
          background: '#202020',
          color: '#fff'
        });
      }
  
      // Validar longitud mínima de la contraseña
      if (contrasena.length < 6) {
        return Swal.fire({
          title: 'Contraseña muy corta',
          text: 'Debe tener al menos 6 caracteres',
          icon: 'error',
          background: '#202020',
          color: '#fff'
        });
      }
  
      // Guardar usuario en localStorage
      const usuario = {
        nombre,
        correo,
        contrasena
      };
  
      localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
  
      // Mostrar alerta de éxito y redirigir a login
      Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión',
        icon: 'success',
        confirmButtonText: 'Ir al login',
        background: '#202020',
        color: '#fff'
      }).then(() => {
        window.location.href = "login.html";
      });
    });
});