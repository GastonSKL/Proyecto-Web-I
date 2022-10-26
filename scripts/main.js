//BOTON DE HABMURGUESA//

const botonCierreModal = document.querySelector(".modal-close");
const modalNavbar = document.querySelector(".modal-navbar");
const botonHamburguesa = document.querySelector(".header__menu");
const modalNavBarBackground = document.querySelector(
  ".modal-navbar__background"
);

botonHamburguesa.addEventListener("click", () => {
  modalNavBarBackground.style.display = "block";
  modalNavbar.style.display = "block";
});

botonCierreModal.addEventListener("click", () => {
  modalNavBarBackground.style.display = "none";
  modalNavbar.style.display = "none";
});

//INTERSECTION OBSERVER DE SKILLS//

const skills = document.querySelector(".skills__container");

const cargarImagen = (entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      skills.style.animation = "aparecer 1000ms";
      skills.style.visibility = "visible";
    }
  });
};

const observer = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

if (window.screen.width > 1115) {
  observer.observe(skills);
}

//VALIDACION DE EMAIL EN FORMULARIO//

const mensaje = document.getElementById("text_area");
const boton = document.querySelector(".contact__form-details-button");
const correo = document.getElementById("correo");
const valid = document.querySelector(".valid");
const error = document.querySelector(".error");

const regMail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validarCorreo = (mail) => {
  if (mail.value.match(regMail)) {
    valid.style.display = "block";
    error.style.display = "none";
  } else {
    error.style.display = "block";
    valid.style.display = "none";
  }
};

boton.addEventListener("click", (e) => {
  e.preventDefault();
  validarCorreo(correo);
});

//INTERSECTION OBSERVER DE FORMULARIO//

const formulario = document.querySelector(".contact__form");

const cargarForm = (entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      formulario.style.animation = "aparecer 1000ms";
      formulario.style.visibility = "visible";
    }
  });
};

const observer1 = new IntersectionObserver(cargarForm, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

if (window.screen.width > 1115) {
  observer1.observe(formulario);
}
