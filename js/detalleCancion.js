let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack = datos.get ('id');
console.log(queryString);
console.log(datos);
console.log(idTrack);

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+idTrack)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);

let titulo = document.querySelector('.titulo')
titulo.innerHTML += data.title

let imagen = document.querySelector('.imagenmac')
imagen.innerHTML += '<img src="'+data.album.cover_medium+'" alt="'+data.artist.name+'">'

let detalleCancion = document.querySelector('.parrafo')
detalleCancion.innerHTML += '<h1>'+data.title+'</h1><h2>From <a href="detalleAlbum.html?id='+data.album.id+'">'+data.album.title+'</a></h2><h2 class="by">By <a href="detalleArtista.html?id='+data.artist.id+'">'+data.artist.name+'</a></h2>'

})










let playlist = []
let recuperoStorage = localStorage.getItem('playlist') ;
console.log(localStorage);//traes algo que se llama local sotrage
console.log(recuperoStorage); // traes el array de la propiedad playlist de localStorage pero escrito como texto
if(recuperoStorage == null){
    playlist = [];
    console.log(playlist);
}else {
    playlist = JSON.parse(recuperoStorage) ; //pasas el texto a un arrray ya bien para leer en formato JSON
    console.log(playlist);
}

if(playlist.includes(idTrack)){ // si la cancion ya esta en la playlist, que diga lo siguiente
    document.querySelector('.boton').innerHTML = 'REMOVE FROM PLAYLIST'
}
let agregar = document.querySelector('.boton') ;
agregar.addEventListener('click', function(){ // cuando clickeas en el boton
    if(playlist.includes(idTrack)){ // te fijas si ya esta la playlist
        let indiceEnElArray = playlist.indexOf(idTrack); // cuenta cuantas veces esta la cancion
        console.log(indiceEnElArray);
        playlist.splice(indiceEnElArray, 1); //splice la saca del array, la borra de la playlist
        document.querySelector('.boton').innerHTML = 'ADD TO PLAYLIST' ; // y se pone el boton agregar 
        console.log(playlist);
    } else{ // si no esta en la playlist
     playlist.push(idTrack); // metele la cancion al array
     document.querySelector('.boton').innerHTML = 'REMOVE FROM PLAYLIST' ; //que el boton pase a dar la opcion de borrar

    }
     let playlistParaStorage = JSON.stringify(playlist) ; // a lo que esta en JSON, lo traduce devuelta a tipo string para mandarlo
     console.log(playlistParaStorage);
     localStorage.setItem('playlist', playlistParaStorage) ; // manda todo lo que hiciste 
     console.log(localStorage) ;
})
