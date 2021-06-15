let querystring = location.search
let querystringobj = new URLSearchParams(querystring);
let busqueda = querystringobj.get("search");

let titulo = document.querySelector('.titulo')

titulo.innerHTML += 'Resultado de busqueda:"'+busqueda+'"'

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
   let artista = data.data
   let listaArtistas = document.querySelector('.artistas')

   for (let i = 0; i < artista.length; i++) {
       
       listaArtistas.innerHTML += '<nav class="artista"><nav class="carta"><a href="detalleArtista.html?id='+artista[i].id+'"><img class="imgl" src="'+ artista[i].picture_big +'" alt="'+ artista[i].name +'"> </a> </nav><h3><a href="detalleArtista?id='+artista[i].id+'">'+ artista[i].name +'</a></h3></nav></nav>'
   }
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
   let cancion = data.data
   let listaCanciones = document.querySelector('.canciones')

   for (let i = 0; i < cancion.length; i++) {
       
    listaCanciones.innerHTML += '<nav class="cancion"><nav class="carta"><img class="imgl" src="'+ cancion[i].album.cover_big +'" alt="'+ cancion[i].title +'"></nav> <h3><a href="detalleCancion.html?id='+cancion[i].id+'"> ' + cancion[i].title +'</a></h3><p>Cancion que pertenece al album <a href="detalleAlbum.html?id='+cancion[i].album.id+'"> <b>'+ cancion[i].album.title +'</b></a> de <a href="detalleArtista.html?id='+cancion[i].artist.id+'"> <b>'+cancion[i].artist.name+'</b></a></p></nav>'
   }
})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+busqueda)
.then(function(response){
    return response.json();
})
.then(function(data){
   let album = data.data
   let listaAlbumes = document.querySelector('.albums')
console.log(album);
   for (let i = 0; i < album.length; i++) {
       
    listaAlbumes.innerHTML += '<nav class="album"><nav class="carta"><a href="detalleAlbum.html?id='+album[i].id+'"><img class="imgl" src="'+ album[i].cover_big +'" alt="'+ album[i].title +' by '+ album[i].artist.name +'"></a></nav><h3><a href="detalleAlbum.html?id='+album[i].id+'">'+album[i].title+'</a></h3><p> Album lanzado por <a href="detalleArtista.html?id='+album[i].artist.id+'"><b>'+album[i].artist.name+'</b></a></p></nav>'
   }
})
