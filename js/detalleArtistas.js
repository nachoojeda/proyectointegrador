let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtist = datos.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtist)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let artista = data
    let nombre = document.querySelector ('.nombre')
    nombre.innerHTML += artista.name
    let imagen = document.querySelector ('.imagenmac')
    imagen.innerHTML += '<img src="'+artista.picture_big+'" alt="'+artista.name+'"></img>'
})

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+idArtist+'/albums')
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data);
    let albums = data.data
    let listaAlbums = document.querySelector ('.listaAlbums')
    for (let i = 0; i < 5; i++) {
        listaAlbums.innerHTML += '<a href="detalleAlbum.html?id='+albums[i].id+'"><li class="albumD">'+ albums[i].title +'<br><img src="'+ albums[i].cover_big +'" alt="'+ albums[i].title +'"></li></a>'
    }
})