let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtist = datos.get('id');

let formulario = document.querySelector('form')
let formu =document.getElementById('formu')
console.log(formu);
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(formu.value === ''){
       alert('EL CAMPO NO PUEDE ESTAR VACIO')
     } else{
        formulario.submit();
    }
    })

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
    imagen.innerHTML += `<img src="${artista.picture_big}" alt="${artista.name}"></img>`
    let titulo = document.querySelector('.titulo')
        titulo.innerHTML += data.name
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
        listaAlbums.innerHTML += `<a href="detalleAlbum.html?id=${albums[i].id}"><li class="albumD">${albums[i].title }<br><img src="${albums[i].cover_big}" alt="${albums[i].title}"></li></a>`
    }
})