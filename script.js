document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-link');

    navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});