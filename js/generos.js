fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/")
.then(function(response){
    return response.json();
})
.then(function(data){
    let generos = data.data
    console.log(generos);


    let listaGeneros = document.querySelector('.bloquegenero')
    for (let i = 0; i < generos.length ; i++) {
    listaGeneros.innerHTML += '<div class="generoindividual"><a href="detallegenero.html?id='+ generos[i].id +'" class="tituloGeneros"> '+ generos[i].name +' </a> <div><img  class="fotoreggaeton" src="'+ generos[i].picture_big +'" alt="'+generos[i].name+'"></div></div>'    
    }

})





