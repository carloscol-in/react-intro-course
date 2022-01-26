import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import './styles.css';

export const TodoItem = ({ text, completed }) => {
    let [isCompleted, setCompleted] = useState(completed);

    const onCheck = () => {
        setCompleted(!isCompleted);
    }

    return (
        <li className="TodoItem">
            <h3 className={`TodoItem__text ${isCompleted ? 'checked' : ''}`}>
                { text }
            </h3>

            <Checkbox completed={isCompleted} onCheck={onCheck} />
        </li>
    )
}