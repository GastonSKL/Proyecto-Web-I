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
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let formList = document.querySelector(".form__list");

const regMail =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const validarCorreo = (mail) => {
  if (!mail.value.match(regMail)) {
    error.style.display = "block";
    valid.style.display = "none";
    return false;
  } else {
    return true;
  }
};

const validarCamposVacios = () => {
  if (p1.value == "") {
    error1.style.display = "inline";
    return false;
  }
  if (p2.value == "") {
    error2.style.display = "inline";
    return false;
  } 
  if(mensaje.value == ""){
    error3.style.display = "inline";
    return false;
  }
  
  else return true;
};

boton.addEventListener("click", (e) => {
  e.preventDefault();
  validarCorreo(correo);
  validarCamposVacios();
  if (validarCamposVacios() && validarCorreo(correo)) {
    error.style.display = "none";
    valid.style.display = "inline";
    formList.innerHTML += `<li>
    <div class="form__list-container">
      <h3 class="form__list-container-title">${p1.value}</h3>
      <h4 class="form__list-container-asunto">${p2.value}</h4>
      <p class="form__list-container-text">${mensaje.value}</p>
    </div>
</li>`;
    correo.value = "";
    p1.value = "";
    p2.value = "";
    mensaje.value = "";
  }
});

//CAROUSEL//

const contenedorC = document.querySelector('.carousel__container');
const punto = document.querySelectorAll('.carousel__position-position');
const carousel = document.querySelector('.carousel');
const imgC = document.querySelectorAll('.carousel__container-img');

punto.forEach((point, i)=>{
  punto[i].addEventListener("click",()=>{
    let position = i;
    let operacion = position * -50;
    contenedorC.style.transform = `translateX(${operacion}%)`
    punto.forEach((point, i)=>{
      punto[i].classList.remove('active')
    })
    punto[i].classList.add('active');
  })
})


const cargarCarousel = (entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      carousel.style.animation = "aparecer 1000ms";
      carousel.style.visibility = "visible";
      for (let i = 0; i < 2; i++) {
        imgC[i].style.animation = "aparecer 1000ms";
        imgC[i].style.visibility = "visible";
        
      }
    }
  });
};

const observer2 = new IntersectionObserver(cargarCarousel, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

if (window.screen.width > 1115) {
  observer2.observe(carousel);
}

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

let inputs = [1, "turing", { x: 2 }, [3, 4], { y: 5 }];
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === "turing") inputs.splice(i, 1);
  else console.log(inputs[i]);
}
