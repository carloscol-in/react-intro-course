import React from 'react';
import './TodoCounter.css';

export const TodoCounter = ({ total, completed }) => {
    return (
        <>
            <header>
                <h2 className="TodoCounter">Todo Counter</h2>
                <p>Haz finalizado {completed} de {total} tareas!</p>
            </header>
        </>
    )
}