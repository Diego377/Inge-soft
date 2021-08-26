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

    var hoy = new Date();
    var hora = hoy.getHours();

    var tiempo = "Buenos dias, ";
    if(hora > 12 && hora < 19)
    {
        tiempo = "Buenas tardes, ";
    }
    else{
        if(hora >= 19 )
        {
            tiempo = "Buenas noches, ";
        }
    }


  alert("Hola, " + tiempo +  gen + nombre.value);
});
