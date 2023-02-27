//Menu lateral
var menu_vivible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_vivible==false){//si esta oculto
        menu.style.display = "block";
        menu_vivible = true;
    }
    else{
        menu.style.display = "none";
        menu_vivible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_vivible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let html =document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);
let wordpress =document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop =document.getElementById("photoshop");
crearBarra(photoshop);
let php =document.getElementById("php");
crearBarra(php);
let ilustrator =document.getElementById("ilustrator");
crearBarra(ilustrator);

//Guardo la cantidad de barritas que se marcan por cada barra
//Uso un arreglo, cada posición pertenece a un elemento
//Empieza desde -1 ya que no hay pintadas al inicio
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable se usa de bandera para saber si ejecuta la animación
let entro = false;

//función que aplica las animaciones en las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 15, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 15, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 14, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 12, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 5, intervalIlustrator);
        },100);
    }
}

//lleno una barrita con la cantidad que se indica en el porcentaje
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Se detecta el scrolling del mouse para así aplicar la animación a la barra
window.onscroll = function(){
    efectoHabilidades();
}