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
        cancion.innerHTML += '<nav class="cancion"><nav class="carta"><img class="imgl" src="'+ topCanciones[i].album.cover_medium +'" alt="'+ topCanciones[i].title +'">  </nav> <h3><a href="'+ +'"> ' + topCanciones[i].title +'</a></h3><p>Cancion que pertenece al album <a href="'+ topCanciones[i].album.title +'"> <b>'+ topCanciones[i].album.title +'</b></a> DE <a href="' + topCanciones[i].artist.name + '.html"> <b>'+topCanciones[i].artist.name+'</b></a></p></nav>'
    }


                      
    for (let i = 0; i < 6; i++) {
        album.innerHTML += '<nav class="album"><nav class="carta"><a href="'+ topAlbums[i].title +'.html"><img class="imgl" src="'+ topAlbums[i].cover_medium +'" alt="'+ topAlbums[i].title +' by '+ topAlbums[i].artist.name +'"></a></nav><h3><a href="'+ topAlbums[i].title +'.html">'+topAlbums[i].title+'</a></h3><p> <b> BY <b> <a href="'+topAlbums[i].artist.name+'.html"><b>'+topAlbums[i].artist.name+'</b></a></p></nav>'
        
    }
    
    for (let i = 0; i < 6; i++) {
        artista.innerHTML += '<nav class="artista"><nav class="carta"><a href="'+ topArtistas[i].name +'.html"><img class="imgl" src="'+ topArtistas[i].picture_medium +'" alt="'+ topArtistas[i].name +'"> </a> </nav><h3><a href="'+ topArtistas[i].name +'".html">'+ topArtistas[i].name +'</a></h3></nav></nav>'
        
    }
})


