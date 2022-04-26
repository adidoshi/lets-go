import React from 'react'

function TextError(props) {
    return (
        <div className='msg'>
            {props.children}
        </div>
    )
}

export default TextError
