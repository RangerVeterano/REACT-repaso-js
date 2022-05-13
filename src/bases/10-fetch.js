const apiKey = 'kBTw10XFyKgf8XnCTXsiVsPTQ7HRGHa0';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

//Las promesas se pueden encadenar sin problemas
peticion.then((resp) => resp.json())
    //Desestructuramos para solo coger la data
    .then(({ data }) => {

        //Extraemos solo la url 
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)

        console.log(url);
    })
    .catch(console.warn); 