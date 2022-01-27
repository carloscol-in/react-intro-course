import './App.css';
import React from 'react';

import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';

export const AppUI = ({ totalTodos, completedTodos, filterTodos, todos, completeTodos, deleteTodo }) => {
    return (
        <>
            <div className='TodoAppContainer'>
                <TodoCounter
                    total={totalTodos}
                    completed={completedTodos}
                />

                <TodoSearch onWrite={filterTodos} />

                <TodoList>
                    {todos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={completeTodos} onDelete={deleteTodo} />
                    ))}
                </TodoList>

                <CreateTodoButton />
            </div>
        </>
    )
}