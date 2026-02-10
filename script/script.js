const  burgerIco = document.querySelector('#burger-ico')

const menuNav = document.querySelector('#menu')

const menuClose = document.querySelector('#menu-close')

const menuLinks = document.getElementById('menu-links')

const site = document.querySelector('main') 



burgerIco.addEventListener('click', () => {
    menuNav.classList.add('abrir-menu');
})

menuClose.addEventListener('click', () => {
    menuNav.classList.remove('abrir-menu');
})

menuLinks.addEventListener('click', () => {
    menuNav.classList.remove('abrir-menu');
})

site.addEventListener('click', () => {
    menuNav.classList.remove('abrir-menu');
})



