let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage); // pasarlo a JSON para manipularlo
let listaCanciones = document.querySelector('.playlist') ;
console.log(playlist) ;

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [] ;
    listaCanciones.innerHTML += '<h1 class="noHay"> ¡No hay canciones! </h1>' 
    console.log(listaCanciones) ; 
}

else{
    listaCanciones.innerHTML += '<h1 class="noHay"> ¡Tus canciones favoritas! </h1>' 
    for (let i = 0; i < playlist.length; i++) {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+playlist[i])
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        listaCanciones.innerHTML += '<a href="detalleCancion.html?id='+data.id+'"><li><i class="fas fa-heart"></i>'+data.title+'</li></a> <button class="boton">Eliminar de la playlist</button>'

        let eliminar = document.querySelector('.boton');
        eliminar.addEventListener('click',function(){
            
            
        })
    })
    }
}
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    window.localStorage.clear('playlist')
})

