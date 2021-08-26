const nombre = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const edad = document.querySelector("#edad-input");

form.addEventListener("submit", (event) => {

    if(document.getElementById('M').checked)
    {
        genero = 'M';
    }
    if(document.getElementById('F').checked)
    {
        genero = 'F';
    }

    if(document.getElementById('I').checked)
    {
        idioma = 'I';
    }
    if(document.getElementById('E').checked)
    {
        idioma = 'E';
    }

    if(idioma == 'E'){
        var gen = "Señor ";

        if(genero == 'F')
        {
            if(edad.value > 40)
            {
                gen = "Señora ";
            }
            else{
                gen = "Señorita "
            }
        }
        if(genero == 'M')
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
    }
    if(idioma == 'I'){
        var gen = "Mister ";

        if(genero == 'F')
        {
            if(edad.value > 40)
            {
                gen = "Ms ";
            }
            else{
                gen = "Miss "
            }
        }
        if(genero == 'M')
        {
            if(edad.value < 40)
            {
                gen = "Bro ";
            }
        }

        var hoy = new Date();
        var hora = hoy.getHours();

        var tiempo = "Good morning ";
        if(hora > 12 && hora < 19)
        {
            tiempo = "Good afternoon ";
        }
        else{
            if(hora >= 19 )
            {
                tiempo = "Good evening ";
            }
        }
    alert("Hi " + tiempo +  gen + nombre.value);
    }
});
