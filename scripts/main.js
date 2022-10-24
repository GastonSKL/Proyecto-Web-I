const botonCierreModal = document.querySelector('.modal-close');
const modalNavbar = document.querySelector('.modal-navbar');
const botonHamburguesa = document.querySelector('.header__menu');
const modalNavBarBackground = document.querySelector('.modal-navbar__background');

botonHamburguesa.addEventListener('click',()=>{
    modalNavBarBackground.style.display = 'block';
    modalNavbar.style.display = 'block';
})

botonCierreModal.addEventListener('click',()=>{
    modalNavBarBackground.style.display = 'none';
    modalNavbar.style.display = 'none';
})