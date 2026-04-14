let listaJugadores = [];
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
        console.log("datos");
        let listaNombre = document.createElement("li");
        listaNombre.textContent=listaJugadores[0];
        listaJugadoresHTML.appendChild(listaNombre);
        console.log(listaNombre);
    }else{
        console.log("sin datos")
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