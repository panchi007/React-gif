import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setcategories }) => {


    const [inputvalue, setValue] = useState('')


    ////////////////////////////////////////////////////////////////////

    const handleinpurChange = (e) => {
        setValue(e.target.value)
    }


    ////////////////////////////////////////////////////////////////////

    const andledubmid = (e) => {
        e.preventDefault()

        if (inputvalue.trim().length > 2) {
            // console.log('submid hecho')
            setcategories((cats) => [ inputvalue , ...cats])
            setValue('')
        }
    }

    /////////////////////////////////////////////////////////////////////
    return (

        <form onSubmit={andledubmid}>
            <div>
                <input
                    type='text'
                    value={inputvalue}
                    onChange={handleinpurChange}
                />
            </div>
        </form>
    )
}

/////////////////////////////////////////////////////////////////////

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}