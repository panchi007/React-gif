import React from 'react'

export const GifGridItem = ({ url, title, id }) => {


    //console.log(props.img)
    ////////////////////////////////////////////////////////

    return (
        <div className="card">

            <p>{title}</p>
            <img src={url} alt={title} />

        </div>
    )
}
