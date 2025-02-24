function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    alert('click desde el boton')
}

asignarTextoElemento('h1', 'Juego del número secreto')
asignarTextoElemento('p', 'Indica un número entre 1 y 10')