document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    const toggles = document.querySelectorAll('.menu-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);
            
            // Cerrar otros dropdowns
            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.style.display = 'none';
                }
            });
            
            // Alternar el dropdown seleccionado
            if (targetDropdown) {
                if (targetDropdown.style.display === 'block') {
                    targetDropdown.style.display = 'none';
                } else {
                    targetDropdown.style.display = 'block';
                }
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        contactForm.reset();
    });
});
