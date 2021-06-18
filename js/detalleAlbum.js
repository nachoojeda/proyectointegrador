let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idAlbum = datos.get ('id');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);

let nombreAlbum = document.querySelector ('.nombreAlbum')
nombreAlbum.innerHTML += data.title

let titulo = document.querySelector ('.titulo')
titulo.innerHTML += data.title


let by = document.querySelector ('.by')
by.innerHTML += 'By <a href="detalleArtista.html?id='+data.artist.id+'">'+data.artist.name+'</a>'
"hola"+varriuabke+"hola"

let imagenAlbum = document.querySelector('imagenmac')
imagenAlbum.innerHTML += '<div class="imagenmac"><img src='+data.cover_big+' alt='+data.artist+'></div>'
console.log(data.cover_big);
´${´
//console.log(data);
let albumS = data.tracks.data
//console.log(albumS);
let cancionesAlbum = document.querySelector('.tracklist')
for (let i = 0; i < albumS.length ; i++) {
cancionesAlbum.innerHTML += '<li>'+albumS[i].title+'</li>'
}


let genre = document.querySelector('.genre')
let genre2 = data.genres.data[0].name
console.log(genre2);
genre.innerHTML += 'Pertenece a <a href="#">'+genre2+'</a>'

})
