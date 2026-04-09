const carouselContainer = document.querySelector(".carousel-container");//selecciona el carousel que tiene las imagenes
const slide = document.querySelectorAll(".slide");//selecciona las imagenes del carousel
const izquierda = document.querySelector(".izquierda");//selecciona el boton izquierda
const derecha = document.querySelector(".derecha");//selecciona el boton derecha
let currentindex = 0;//variable que almacena en que imagen estamos actualmente (empieza en la primera)

//funcion que mueve el carousel a la izquierda
function updateCarousel() {
    const offset = currentindex * 100;//calcula cuanto debe moverse el carrusel a la posicion correcta
    carouselContainer.style.transform = `translateX(-${offset}%)`;//aplica el movimiento usando transform
}

//accion boton derecha
derecha.addEventListener("click", () => {//cuando se presione el boton derecha
    currentindex = (currentindex + 1) % slide.length;//Avanza al siguiente índice. El % slides.length hace que vuelva al inicio cuando llegue al final (ciclo infinito)
 updateCarousel();//llama a la funcion que mueve el carrusel
});

//accion boton izquierda
izquierda.addEventListener("click", () => {//cuando se presione el boton izquierda
    currentindex = (currentindex - 1 + slide.length) % slide.length;//Retrocede al índice anterior. El % slides.length hace que vuelva al inicio cuando llegue al final (ciclo infinito)
 updateCarousel();//llama a la funcion que mueve el carrusel
});