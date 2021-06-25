let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idGenre = datos.get('id');
console.log(queryString);
console.log(datos);
console.log(idGenre);

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
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenre)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let titulo = document.querySelector('.titulo')
        titulo.innerHTML += data.name

    })

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + idGenre + '/artists')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let artistas = data.data
        let listaArtistas = document.querySelector('.listaArtistas')
        for (let i = 0; i < 10; i++) {
        listaArtistas.innerHTML +=`<a href="detalleArtista.html?id=${artistas[i].id}"class="artistasG"><img class="fotoDG" src="${artistas[i].picture_big}" alt="${artistas[i].name}"><br><p>${artistas[i].name}</p></a>`
        

        }



    })


    

