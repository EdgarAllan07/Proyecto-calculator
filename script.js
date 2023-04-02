//inicializamos la constante de la pantalla
const pantalla = document.querySelector("#display");
//va leer todos los botones (no es el div con la clase (buttons) son las etiquetas button)
const botones = document.querySelectorAll("button");

//recorre todos los botones que estan en al constante
//el parametro items de indentifica el boton en especifico por ejemplo:
botones.forEach((items)=>{
    //los botones ya tiene la propiedes de onclick en otras palabras es el evento de clickear el boton
    //ok aqui lo questamos haciendo es inicializar el items.onclick a una funcion
    //otra forma de verlo items.onclick = function(){}
    items.onclick=()=>{
        //si el items o boton seleccionado es el clear entonces que haga lo siguiente
        if(items.id == "clear"){
            //si se dio al boton clear entonces que limpie la pantalla de la calcu
            //osea estara vacio
            pantalla.innerText="";
            //backspace = es el id del borrador en pantalla de la calcu
        }else if(items.id == "backspace"){
            //convirtiendo lo que estan en pantalla a String
            //osea lo que escriba en pantalla de la calcu se convertia a String
            let cadena = pantalla.innerText.toString();
            //substr() convierte la cadena en substring nos ayuda a buscar ciertos caracteres
            //Buscar el concepto en la biblioteca de la javascript
            //Extrae cierto numeros de caracteres puede desde el caracter "0" hasta el ultimo caracter
            pantalla.innerText=cadena.substr(0,cadena.length-1);
            //esto ira borrando uno por uno por eso el -1
        }else if(pantalla.innerText != "" && items.id == "igual"){
            //el metodo eval nos ayuda para realizar operaciones aritmeticas
            //lo que hace eval basicamente es: let cadena = "2+2" y esto se vuelve op arimetica
            //pantalla = a la respuesta de la operacion que contiene el metodo "eval"
            pantalla.innerText = eval(pantalla.innerText);
        }else if(pantalla.innerHTML == "" && items.id == "igual"){
            //saldra un error ya que no ingreso nada el usuario
            display.innerText = "Null";
            //tiempo de espera para poner la pantalla en vacio , 2000 milisegundos = 2 segundos
            setTimeout(()=>(pantalla.innerText=""),2000);
        }else{
            //cualquier el elemento que presione de la calculador parecera en la pantalla
            pantalla.innerText +=items.id;
        }
    }

})


//ahora vamos activar el switch que nos permitira cambiar el color de fondo de la calculadora
//de blanco a negro y de negro a blanco
const btnFondo = document.querySelector(".theme-toggler");
//fondo de la calculador
const calculador = document.querySelector(".calculator");
let isdark = true;
//cuando se presione el boton hara lo siguiente
btnFondo.onclick=()=>{
    
    //El calculador.classList.toggle("clasedelaetiqueta") es una interuptor para que se active
    //los estilos de css que se han programado en esa clase 
    //osea cuando btnFondo se active su evento onclick() va activar o desactivar esa clase
    //igual con la clase "active" que la hayamos junto a "theme-toggler active"
    calculador.classList.toggle("dark");
    btnFondo.classList.toggle("active");
    isdark =!isdark;

}


