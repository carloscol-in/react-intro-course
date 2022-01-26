import React from 'react';
import './styles.css';

export const TodoList = (props) => {
    return (
        <>
            <section className="TodoList">
                <ul className="TodoList__container">
                    {props.children}
                </ul>
            </section>
        </>
    )
}