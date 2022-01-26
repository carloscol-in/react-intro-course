import React from 'react';
import './styles.css';

export const Input = ({ input, onchange }) => {
    return (
        <>
            <input type={input.type} className={`Input ${input.type}`} placeholder={input.placeholder} onChange={onchange} />
        </>
    )
}