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
})
