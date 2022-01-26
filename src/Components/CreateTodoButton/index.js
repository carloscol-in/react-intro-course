import React from 'react';
import { TextInputButton } from '../TextInputButton';
import './styles.css';


export const CreateTodoButton = () => {
    const button = {
        message: 'Create task',
        type: 'success',
    };
    const input = {
        placeholder: 'Task description',
    };

    return (
        <>
            <section className="CreateTodo">
                <h3>Create new task</h3>

                <TextInputButton input={input} button={button} />
            </section>
        </>
    )
}