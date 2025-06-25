const mobileMenu = document.querySelector('.mobile-menu');
const links = document.querySelector('.links');

mobileMenu.addEventListener('click', () => {
    links.classList.toggle('active');
    mobileMenu.classList.toggle('open');  
});

