let listaJugadores = [];
let jugador ={
    nombre: "juegador 1",
    rol: "inocente",
}
/* Ejemplo de div que contiene a los jugadores
<div class="lista">
<div class="fila">
  <div class="texto">eqg</div>
  <div class="acciones">
    <button class="btn borrar">Borrar</button>
    <button class="btn editar">Editar</button>
  </div>
</div> 
*/
let nombreJugador = document.getElementById("nombreJugador");
let butSumarJugador = document.getElementById("sumarJugador");
let butCargarJugadores = document.getElementById("cargarLista")
butSumarJugador.addEventListener("click", sumarJugador);
butCargarJugadores.addEventListener("click", cargarJugadores);



function sumarJugador(){
    // console.log(`nombre anadido ${nombreJugador.value}`);
    listaJugadores.push(nombreJugador.value);
    console.log(`lista de jugadores ${listaJugadores}`);
}

function cargarJugadores(){
    console.log("cargarJugadores");
    console.log(listaJugadores);

    let listaJugadoresHTML = document.getElementById('listaJugadores');
    console.log(listaJugadoresHTML)
    if(listaJugadores[0] != null){
        listaJugadoresHTML.innerHTML="";
        console.log("datos");
        let listaNombre = document.createElement("li");
        listaNombre.textContent=listaJugadores[0];
        listaJugadoresHTML.appendChild(listaNombre);
        listaNombre.addEventListener("click", modificarLista)
        console.log(listaNombre);
    }else{
        console.log("sin datos")
    }
function modificarLista(e){

}

    // for(let i = 0; i < listaJugadores.length-1; i++){
    //     console.log(`valor de i ${i}`);
    //     let nombre = document.createElement("li");
    //     console.log(`nombre para lista de i ${listaJugadores[i]}`);
    //     nombre.textContent(listaJugadores[i]);
    //     console.log("nombre"+nombre)
    //     listaJugadoresHTML.appendChild(nombre);
    // }
}