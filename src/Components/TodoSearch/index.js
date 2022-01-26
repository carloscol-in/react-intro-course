import React from 'react';
import { Input } from '../Input';
import './styles.css';


export const TodoSearch = ({ onWrite }) => {
    const input = {
        placeholder: 'Search for a task',
    };

    const onchange = (e) => {
        let word = e.target.value;
        
        if (word === null) word = '';
        
        // clean word
        word = word.trim();
        
        // filter todos by word
        onWrite(word);
    }

    return (
        <>
            <section className="TodoSearch">
                <Input input={input} onchange={onchange} />
            </section>
        </>
    )
}