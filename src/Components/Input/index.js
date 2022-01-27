import React from 'react';
import './styles.css';

export const Input = ({ input, onchange }) => {
    const inputChange = (e) => {
        onchange(e.target.value);
    }
    return (
        <>
            <input type={input.type} className={`Input ${input.type}`} placeholder={input.placeholder} onChange={inputChange} />
        </>
    )
}