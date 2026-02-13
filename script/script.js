const  burgerIco = document.querySelector('.burger-ico')

const menuNav = document.querySelector('.menu-nav')

const menuLinks = document.getElementById('menu-links')

const site = document.querySelector('main') 



burgerIco.addEventListener('click', () => {
    burgerIco.classList.toggle('abrir-menu');
    menuNav.classList.toggle('abrir-menu');
})

menuLinks.addEventListener('click', () => {
    burgerIco.classList.remove('abrir-menu');
    menuNav.classList.remove('abrir-menu');
})

site.addEventListener('click', () => {
    burgerIco.classList.remove('abrir-menu');
    menuNav.classList.remove('abrir-menu');
})



