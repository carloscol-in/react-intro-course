import React from 'react';
import { Input } from '../Input';
import './styles.css';

export const TextInputButton = ({ input, button }) => {
    return (
        <>
            <div className="TextInputButton">
                <Input input={input} />
                <button className={`TextInputButton__button ${button.type}`}>{button.message}</button>
            </div>
        </>
    )
}