import React from 'react';

export const Button = ({value,input})=> {
    return (
        <>
          <button value={value} onClick={input} className="btn btn-secondary">{value}</button>  
        </>
    )
}
