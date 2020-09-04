const menuTogle = document.querySelector('.menu-togle input');
const nav = document.querySelector('nav ul')

menuTogle.addEventListener('click', () => {
    nav.classList.toggle('slide');
    document.body.classList.toggle('dark')


})