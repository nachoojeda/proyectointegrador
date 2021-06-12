fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556")
.then(function(response){
    return response.json();
})
.then(function(detalleArtista){
    console.log(detalleArtista);
})