import React, { useState } from 'react';
import { useLocalStorage } from '../../Hooks/useLocalStorage';
import { TextInputButton } from '../TextInputButton';
import './styles.css';


export const CreateTodoButton = () => {
    const [todos, saveTodos] = useLocalStorage('TODOS_v1', []);
    const [text, setText] = useState('');

    const button = {
        message: 'Create task',
        type: 'success',
    };
    const input = {
        placeholder: 'Task description',
    };

    const onSubmit = () => {
        const todo = {
            id: text,
            text: text,
            completed: false
        }
        saveTodos([...todos, todo]);
    }

    return (
        <>
            <section className="CreateTodo">
                <h3>Create new task</h3>

                <TextInputButton input={input} button={button} onchange={setText} onclick={onSubmit} />
            </section>
        </>
    )
}