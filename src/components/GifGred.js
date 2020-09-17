import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'



export const GifGred = ({ categorye }) => {


    const { Data, learning } = useFetchGifs(categorye)

    // const [imeges, setimages] = useState([])

    ///////////////////////////////////////////////////////////////////

    // useEffect(() => {

    //      getGifs(categorye).then(setimages)

    // }, [])

    ///////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    // GetGifs()

    return (
        <>
            <h3>{categorye}</h3>


            <div>
                {
                    Data.map(img => (

                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>


        </>
    )
}
