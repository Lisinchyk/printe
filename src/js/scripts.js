const burger = document.querySelector('.navigation__burger-menu');
const telMenu = document.querySelector('.footer__tel');

burger.addEventListener('click', function() {
    const nav = document.querySelector('.navigation');
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});