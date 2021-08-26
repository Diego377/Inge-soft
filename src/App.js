const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit", (event) => {
    var gen = "Señor ";

    if(genero.value == 'F')
    {
        if(edad.value > 40)
        {
            gen = "Señora ";
        }
        else{
            gen = "Señorita "
        }
    }
    if(genero.value == 'M')
    {
        if(edad.value < 40)
        {
            gen = "Joven ";
        }
    }
  alert("Hola " + gen + nombre.value);
});
