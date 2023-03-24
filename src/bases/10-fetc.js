const apiKey = 'UuiBrCD5pm6MMyivnH7pl30Zy6TvJxmK'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
/*
peticion.then(res=>{
    res.json().then(data=>{
        console.log(data);
    })
})
.catch(console.warn);
*/

//PROMESAS EN cadena
peticion
   .then(res => res.json())
   .then(({data})=>{
    console.log(data.images.original.url);
    //Como colocar la imagen en html

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
   })
   .catch(console.warn);