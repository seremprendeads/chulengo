document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        const links = document.querySelectorAll('.nav-links a');
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('phone').value;
            const mensaje = document.getElementById('message').value;

            const textoWhatsApp = 'Hola Chulengos! Me contacto desde su sitio web:\n\n*Nombre:* ' + nombre + '\n*Email:* ' + email + '\n*Telefono:* ' + telefono + '\n*Mensaje:* ' + mensaje;

            const numeroWhatsApp = '5491159554443';

            const mensajeCodificado = encodeURIComponent(textoWhatsApp);

            const urlWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + mensajeCodificado;

            window.open(urlWhatsApp, '_blank');
        });
    }

});
