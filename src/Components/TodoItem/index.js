import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import './styles.css';

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
    let [isCompleted, setCompleted] = useState(completed);

    const onCheck = () => {
        onComplete(text);
        setCompleted(!isCompleted);
    }

    return (
        <li className="TodoItem">
            <h3 className={`TodoItem__text ${isCompleted ? 'checked' : ''}`}>
                { text }
            </h3>

            <button onClick={() => onDelete(text)}>
                Delete
            </button>

            <Checkbox completed={isCompleted} onCheck={onCheck} />
        </li>
    )
}