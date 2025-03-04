let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo");
    if (nombreAmigo.value === "") {
        alert ("Por favor, inserte un nombre");
        return;
    } 
    amigos.push(nombreAmigo.value);
    limpiarCaja();
    mostrarLista();
};

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (i = 0;
        i < amigos.length;
        i++
    ) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No hay amigos");
        return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El nombre de tu amigo sorteado es: ${nombreSorteado}`;
}
