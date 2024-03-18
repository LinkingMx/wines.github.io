//Swiper
//Initialize the swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Set blur open modal
document.addEventListener("DOMContentLoaded", function () {
  var myModal = document.getElementById("exampleModal"); // Asegúrate de usar el ID de tu modal
  var mainContainer = document.querySelector(".blur"); // Selecciona tu contenedor principal

  myModal.addEventListener("show.bs.modal", function () {
    mainContainer.classList.add("blur-effect"); // Añade efecto de desenfoque
  });

  myModal.addEventListener("hidden.bs.modal", function () {
    mainContainer.classList.remove("blur-effect"); // Elimina efecto de desenfoque
  });
});
//End Set Blur Open Modal

// Define una función para precargar las siguientes imágenes
function preloadNext(n) {
  swiper.slides
    .slice(swiper.activeIndex, swiper.activeIndex + n + 1)
    .map((slide) => slide.querySelector("img"))
    .forEach((img) => img.setAttribute("loading", "eager"));
}

// Precarga las siguientes 2 imágenes inmediatamente
preloadNext(10);

/**
 * Function fetchData con todos los parametros para validar que todo este ok
 */
async function fetchData() {
  try {
    const response = await fetch("wine.json");
    // Verifica el código de estado de la respuesta
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json(); // Espera a que la promesa se resuelva
    return data; // Retorna los datos si necesitas usarlos fuera de esta función
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamar a fetchData y manejar la respuesta
fetchData().then((data) => {
  //Fill the qty wines found
  //Se encontraron: <strong>25 etiquetas</strong>
  document.getElementById(
    "qty"
  ).innerHTML = `Se encontraron: <strong>${data.length} etiquetas</strong>`;

  //Llenamos los filtros superiores
  let sel_paises = document.getElementById("country-select");
  let sel_tipos = document.getElementById("tipo-select");
  let sel_variedad = document.getElementById("variedad-select");

  //Creamos los sets para los filtros
  // Crear un conjunto para almacenar países únicos
  const uniqueCountries = new Set();
  const uniqueTipos = new Set();
  const uniqueVariedad = new Set();

  //Recorremos los vinos y ejecutamos las acciones correspondientes
  data.forEach((wines) => {});

  //Llenamos los SETS de los filtros
  uniqueCountries.add(data.país);
  uniqueTipos.add(data.tipo);
  uniqueVariedad.add(data.variedad);
});
