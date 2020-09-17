export const getGifs = async (categorye) => {

    const url = `httpss://api.giphy.com/v1/gifs/search?q=${encodeURI(categorye)}&limit=100&api_key=Y8lfMQ7O1zPm2K89wQJehUlkM0OMtONU`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()
    const gift = data.map((img) => {

        return {

            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })

    console.log(gift)
    console.log(gift)
    
    return gift

}