export const getGifs = async (categorye) => {

   
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()
    const gift = data.map((img) => {

        return {

            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
            img : [1,2,3,4]
        }
    })

    console.log(gift)
    console.log(gift)
    
    return gift

}