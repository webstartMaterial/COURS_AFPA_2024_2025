
// quand le contenu est chargé (BONNE PRATIQUE)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    // Gérer le clic sur le menu burger
    // ET FAIRE UN TOGGLE SUR LA CROIX ET LE MENU BURGER
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Gérer les effets des dropdowns pour les grands écrans
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.maxHeight = menu.scrollHeight + 'px';
            menu.style.opacity = '1';
        });

        dropdown.addEventListener('mouseleave', () => {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.maxHeight = '0';
            menu.style.opacity = '0';
        });
    });
});
