const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit", (event) => {
  alert("Hola " + nombre.value);
});
