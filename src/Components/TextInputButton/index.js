import React from 'react';
import { Input } from '../Input';
import './styles.css';

export const TextInputButton = ({ input, button, onchange, onclick }) => {
    return (
        <>
            <div className="TextInputButton">
                <Input input={input} onchange={onchange} />
                <button className={`TextInputButton__button ${button.type}`} onClick={onclick}>{button.message}</button>
            </div>
        </>
    )
}