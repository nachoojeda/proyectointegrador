let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idAlbum = datos.get ('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/"+idAlbum)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);

let titulo = document.querySelector ('.titulo')

titulo.innerHTML += data.title

let by = document.querySelector ('.by')

by.innerHTML += 'By <a href="detalleArtista.html?id='+data.artist.id+'">'+data.artist.name+'</a>'
})
