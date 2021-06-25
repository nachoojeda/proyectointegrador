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

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/")



    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let topCanciones = data.tracks.data
        let topAlbums = data.albums.data
        let topArtistas = data.artists.data

        let cancion = document.querySelector(".canciones")
        let album = document.querySelector(".albums")
        let artista = document.querySelector(".artistas")

        for (let i = 0; i < 6; i++) {
            cancion.innerHTML += `<nav class="cancion"><nav class="carta"><a href="detalleCancion.html?id=${topCanciones[i].id}"><img class="imgl" src="${topCanciones[i].album.cover_big}" alt="${topCanciones[i].title}"></a></nav> <h3><a href="detalleCancion.html?id=${topCanciones[i].id}">${topCanciones[i].title}</a></h3><p>Cancion que pertenece al album <a href="detalleAlbum.html?id=${topCanciones[i].album.id}"> <b>${topCanciones[i].album.title}</b></a> de <a href="detalleArtista.html?id=${topCanciones[i].artist.id}  "> <b>  ${topCanciones[i].artist.name}</b></a></p></nav>`}

        for (let i = 0; i < 6; i++) {
            album.innerHTML += `<nav class="album"><nav class="carta"><a href="detalleAlbum.html?id=${topAlbums[i].id}  "><img class="imgl" src="${topAlbums[i].cover_big}  " alt="${topAlbums[i].title} by ${topAlbums[i].artist.name}  "></a></nav><h3><a href="detalleAlbum.html?id=${topAlbums[i].id}">${topAlbums[i].title}  </a></h3><p> Album lanzado por <a href="detalleArtista.html?id=${topAlbums[i].artist.id}  "><b>  ${topAlbums[i].artist.name}  </b></a></p></nav>`}

        for (let i = 0; i < 6; i++) {
            artista.innerHTML += `<nav class="artista"><nav class="carta"><a href="detalleArtista.html?id=${topArtistas[i].id}  "><img class="imgl" src="${topArtistas[i].picture_big}" alt="${topArtistas[i].name}"> </a> </nav><h3><a href="detalleArtista?id=  ${topArtistas[i].id}  ">  ${topArtistas[i].name}  </a></h3></nav></nav>`}
    })