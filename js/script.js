		


        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

		// Formulario contacto a Whatsapp
		document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const mensaje = document.getElementById('message').value;
    
    // Crear el mensaje para WhatsApp
    const textoWhatsApp = `Hola Chulengos! Me contacto desde su sitio web:\n\n*Nombre:* ${nombre}\n*Email:* ${email}\n*Teléfono:* ${telefono}\n*Mensaje:* ${mensaje}`;
    
    // Tu número de WhatsApp (reemplaza con tu número, incluyendo código de país sin +)
    const numeroWhatsApp = '5491159554443'; // Ejemplo: 549 (Argentina) + código de área + número
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(textoWhatsApp);
    
    // Crear el enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
});