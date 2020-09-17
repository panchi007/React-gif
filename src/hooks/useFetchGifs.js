import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"




export const useFetchGifs = (categorye) => {


    const [state, setstate] = useState({


        Data: [],

        learning: true

    })


    useEffect(() => {

        getGifs([categorye])
            .then(img => {

                setTimeout(() => {

                    console.log(img)
                    setstate({
                        Data: img,

                        learning: true
                    })

                }, 3000)

            })

    }, [categorye])




    return state


}
