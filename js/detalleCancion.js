let queryString = location.search; //Atrapar lo que etsa despues del html
let datos = new URLSearchParams(queryString); //Traduccion
let idTrack = datos.get('id');//Atrapando la igualdad de la palabra
console.log(queryString);
console.log(datos);
console.log(idTrack);

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTrack)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let titulo = document.querySelector('.titulo')
        titulo.innerHTML += data.title

        let imagen = document.querySelector('.imagenmac')
        imagen.innerHTML += '<img src="' + data.album.cover_big + '" alt="' + data.artist.name + '">'

        let detalleCancion = document.querySelector('.parrafo')
        detalleCancion.innerHTML += `<h1>${data.title}</h1><h2>From <a href="detalleAlbum.html?id=${data.album.id}">${data.album.title}</a></h2><h2 class="by">By<a href="detalleArtista.html?id=${data.artist.id}">${data.artist.name}</a></h2><iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="1000" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
    })

let playlist = [] // Creo un array vacio y me lo guarda en el localstorage
console.log(localStorage); //muestro algo que se llama local sotrage (palabra reservada, no se puede declarar. es tipo document)

let recuperoStorage = localStorage.getItem('playlist'); // traigo la proiedad 'playlist' del objeto localstorage
console.log(recuperoStorage); // muestro el string playlist, que parece un array. pero no lo es

if (recuperoStorage == null) { //Si no hay nada adentro de recuperoStorage-playlist, mando la playlist vacia
    playlist = [];
    console.log(playlist);
} else {
    playlist = JSON.parse(recuperoStorage); //pasas el string a un arrray para leer en formato JSON
    console.log(playlist); //mostras el array desplegable
}

if (playlist.includes(idTrack)) { // si la playlisyt incluye el id del detalle, que aparezca un boton que diga lo siguiente
    document.querySelector('.boton').innerHTML = 'Eliminar de playlist'
}
let agregar = document.querySelector('.boton');
agregar.addEventListener('click', function () { // (evento click) cuando clickeas en el boton sucede lo siguiente: 
    if (playlist.includes(idTrack)) { // se fija si la cancion ya esta la playlist
        let indiceEnElArray = playlist.indexOf(idTrack); // la variable solo sirve para contar. indexof cuenta si esta la cancion o no. si esta te devuelve un 1.
        console.log(indiceEnElArray);
        playlist.splice(indiceEnElArray, 1); //splice saca del array la cancion, la borra de la playlist, si el indice es = 1
        document.querySelector('.boton').innerHTML = 'Agregar a playlist'; // una vez que la sacaste queres que el boton se transforme en "agregar a playlist" 
        console.log(playlist);
    } else { // si no esta en la playlist
        playlist.push(idTrack); // mete la cancion al array
        document.querySelector('.boton').innerHTML = 'Eliminar de playlist'; //que el boton pase a dar la opcion de borrar

    }
    let playlistParaStorage = JSON.stringify(playlist); // a lo que esta en JSON, lo traduce devuelta a tipo string para mandarlo
    console.log(playlistParaStorage);
    localStorage.setItem('playlist', playlistParaStorage); // manda todo lo que hiciste 
    console.log(localStorage);
})