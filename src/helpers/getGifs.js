export const getGifs = async (categorye) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorye)}&limit=100&api_key=Y8lfMQ7O1zPm2K89wQJehUlkM0OMtONU`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()
    const gift = data.map((imgs) => {

        return {

            id: imgs.id,
            title: imgs.title,
            url: imgs.images.downsized_medium.url,
            
        }
    })

   
    console.log(gift)
    
    return gift

}