console.log("dsfasd");


fetch("")
.then(function(response){
    return response.json();
})
.then(function(data){
    let cancion = document.querySelector(".cancion")
    let album = document.querySelector(".album")
    let artista = document.querySelector(".artista")

    for (let i = 0; i < topcanciones.length; i++) {
        cancion.innerHTML += '<nav class="carta"><img class="imgl" src="'+ lacancion.imagen +'" alt="'+ lacancion.nombre +'">  </nav> <h3><a href="'+ +'"> ' + lacancion.nombre +'</a></h3>     <p>Cancion que pertenece al album <a href="'+ lacancion.album +'"> <b>'+ lacancion.album.nombre +'</b></a> de <a href="'+lacancion.artista.nombre+'.html"> <b>Mac Miller</b></a></p>'
    }
                      
    for (let i = 0; i < topalbumes.length; i++) {
        album.innerHTML += '<nav class="carta"><a href="'+ album.nombre +'.html"><img class="imgl" src="'+ album.imagen +'" alt="'+ album.nombre+' by '+ album.artista+'"></a></nav><h3><a href="'+ album.nombre+'.html">'+album.nombre+'</a></h3><p> Album lanzado en el año '+album.anio+'por <a href="'+album.artista+'.html"><b>'+album.artista+'</b></a></p>'
        
    }
    
    for (let i = 0; i < topartistas.length; i++) {
        artista.innerHTML += '<nav class="carta"><a href="'+ artista.nombre +'.html"><img class="imgl" src="'+ artista.imagen +'" alt="'+ artista.nombre +'"> </a> </nav><h3><a href="'+ artista.nombre +'".html">'+ artista.nombre +'</a></h3><p>'+ artista.oyentes +'oyentes mensuales</p></nav>'
        
    }
})


