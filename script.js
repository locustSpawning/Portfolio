// Make mobile nav bar visible
const menuToggle = document.getElementById('menu-link');
const mobileNavBar = document.getElementById('mobile-menu-navbar');

menuToggle.addEventListener('click', () => {
    mobileNavBar.style.display = 'flex';
});

// Make mobile nav bar close
const closeMenu = document.getElementById('x-close');

closeMenu.addEventListener('click', () => {
    mobileNavBar.style.display = 'none';
});
