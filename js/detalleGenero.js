let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idGenre = datos.get ('id');
console.log(queryString);
console.log(datos);
console.log(idGenre);

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+idGenre)
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);
let titulo = document.querySelector('.titulo')
titulo.innerHTML += data.name
let imagen = document.querySelector('.contenedorimagen')
imagen.innerHTML += '<img src="'+data.picture_big+'" alt="'+data.name+'" class="estilosImagen"></img>'


})

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+idGenre+'/artists')
.then(function(response){
    return response.json();
})
.then(function(data){
console.log(data);



})
