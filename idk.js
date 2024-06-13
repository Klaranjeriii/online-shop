
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('mobile-menu');
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
