function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



// Evento de envío de formulario
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Datos del formulario
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Parámetros de EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Enviar correo
    emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Correo enviado con éxito!', response.status, response.text);
        }, function(error) {
            alert('Error al enviar el correo:', error);
        });
});
