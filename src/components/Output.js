import React from 'react'

export const Output = (props) => {
    return (
        <>
            <input value={props.result} className="form-control" type="text" placeholder="Calc" />
        </>
    )
}
