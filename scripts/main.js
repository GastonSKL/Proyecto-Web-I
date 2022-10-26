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

const skills = document.querySelector('.skills__container');

const cargarImagen = (entradas, observer) =>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            skills.style.animation = 'aparecer 1000ms';
            skills.style.visibility = 'visible';
            
        }
    });
};

const observer = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .7
});

observer.observe(skills);