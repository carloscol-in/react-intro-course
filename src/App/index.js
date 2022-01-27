import './App.css';
import React, { useState } from 'react';
import { AppUI } from './AppUI';

const todosList = [
  { id: '1', text: 'Bake cupcakes', completed: false },
  { id: '2', text: 'Prepare hot chocolate', completed: true },
  { id: '3', text: 'Prepare popcorn', completed: false },
]

function App() {
  const todos = todosList;
  const [listTodos, setTodos] = useState(todos);

  const completedTodos = listTodos.filter(todo => todo.completed).length;
  const totalTodos = listTodos.length;


  const filterTodos = (word) => {
    // if word '' return all todos
    if (word === '' || word === null) setTodos(todos);

    // filter todos that includes word in text
    setTodos(todos.filter(todo => todo.text.toLowerCase().includes(word)));
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  
  return (
    <AppUI
      total={totalTodos}
      completed={completedTodos}
      filterTodos={filterTodos}
      todos={listTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
