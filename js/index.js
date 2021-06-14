fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let topCanciones = data.tracks.data
    let topAlbums = data.albums.data
    let topArtistas = data.artists.data

    let cancion = document.querySelector(".canciones")
    let album = document.querySelector(".albums")
    let artista = document.querySelector(".artistas")

    for (let i = 0; i < 6; i++) {
<<<<<<< HEAD
        cancion.innerHTML += '<nav class="cancion"><nav class="carta"><img class="imgl" src="'+ topCanciones[i].album.cover_medium +'" alt="'+ topCanciones[i].title +'">  </nav> <h3><a href="detalleCancion.html?id='+topCanciones[i].id+'"> ' + topCanciones[i].title +'</a></h3>     <p>Cancion que pertenece al album <a href="detalleAlbum.html?id='+topCanciones[i].album.id+'"> <b>'+ topCanciones[i].album.title +'</b></a> de <a href="detalleArtista.html?id='+topCanciones[i].artist.id+'"> <b>'+topCanciones[i].artist.name+'</b></a></p></nav>'
=======
        cancion.innerHTML += '<nav class="cancion"><nav class="carta"><a href="'+ topCanciones[i].title +'.html"><img class="imgl" src="'+ topCanciones[i].album.cover_big +'" alt="'+ topCanciones[i].title +'"></a></nav> <h3><a href="'+topCanciones[i].title+'.html"> ' + topCanciones[i].title +'</a></h3><p><b>Pertenece al album<b> <a href="'+ topCanciones[i].album.title +'"> <b>'+ topCanciones[i].album.title +'</b></a> by <a href="' + topCanciones[i].artist.name + '.html"> <b>'+topCanciones[i].artist.name+'</b></a></p></nav>'
>>>>>>> ba65c7dab0d1f9dd9899c9800259e10de9fbce73
    }

                
                      
    for (let i = 0; i < 6; i++) {
<<<<<<< HEAD
        album.innerHTML += '<nav class="album"><nav class="carta"><a href="detalleAlbum.html?id='+topAlbums[i].id+'"><img class="imgl" src="'+ topAlbums[i].cover_medium +'" alt="'+ topAlbums[i].title +' by '+ topAlbums[i].artist.name +'"></a></nav><h3><a href="detalleAlbum.html?id='+topAlbums[i].id+'">'+topAlbums[i].title+'</a></h3><p> Album lanzado por <a href="detalleArtista.html?id='+topAlbums[i].artist.id+'"><b>'+topAlbums[i].artist.name+'</b></a></p></nav>'
=======
        album.innerHTML += '<nav class="album"><nav class="carta"><a href="'+ topAlbums[i].title +'.html"><img class="imgl" src="'+ topAlbums[i].cover_big +'" alt="'+ topAlbums[i].title +' by '+ topAlbums[i].artist.name +'"></a></nav><h3><a href="'+ topAlbums[i].title +'.html">'+topAlbums[i].title+'</a></h3><p> <b> by <b> <a href="'+topAlbums[i].artist.name+'.html"><b>'+topAlbums[i].artist.name+'</b></a></p></nav>'
>>>>>>> ba65c7dab0d1f9dd9899c9800259e10de9fbce73
        
    }
    
    for (let i = 0; i < 6; i++) {
<<<<<<< HEAD
        artista.innerHTML += '<nav class="artista"><nav class="carta"><a href="detalleArtista.html?id='+topArtistas[i].id+'"><img class="imgl" src="'+ topArtistas[i].picture_medium +'" alt="'+ topArtistas[i].name +'"> </a> </nav><h3><a href="detalleArtista?id='+topArtistas[i].id+'">'+ topArtistas[i].name +'</a></h3></nav></nav>'
=======
        artista.innerHTML += '<nav class="artista"><nav class="carta"><a href="'+ topArtistas[i].name +'.html"><img class="imgl" src="'+ topArtistas[i].picture_big +'" alt="'+ topArtistas[i].name +'"> </a> </nav><h3><a href="'+ topArtistas[i].name +'".html">'+ topArtistas[i].name +'</a></h3></nav></nav>'
>>>>>>> ba65c7dab0d1f9dd9899c9800259e10de9fbce73
        
    }
})



