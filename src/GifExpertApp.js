import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

import { GifGred } from './components/GifGred'


export const GifExpertApp = () => {

    const [categaries, setcategories] = useState(['marvel'])

    // const llamar = () =>{
    //     setcategories([...categaries, 'dsadsa'])
    //}

    /////////////////////////////////////////////////////////////////////
    return (
        <div>
            <h2>GigExpertApp</h2>
            <hr />
            <AddCategory setcategories={setcategories} />
            <ol>
                {
                    categaries.map((categorye) => (
                        <GifGred categorye={categorye}
                            key={categorye}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
