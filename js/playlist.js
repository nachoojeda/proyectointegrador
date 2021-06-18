let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage); // pasarlo a JSON para manipularlo
let listaCanciones = document.querySelector('.playlist') ;
console.log(playlist) ;

if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [] ;
    listaCanciones.innerHTML += '<h2 class="noHay"> ¡No hay canciones! </h2>' 
    console.log(listaCanciones) ; 
}else{
    for (let i = 0; i < playlist.length; i++) {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+playlist[i])
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        listaCanciones.innerHTML += '<a href="detalleCancion.html?id='+data.id+'"><li><i class="fas fa-heart"></i>'+data.title+'</li></a>'
    })
    }
}
let clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    window.localStorage.clear('playlist')
})