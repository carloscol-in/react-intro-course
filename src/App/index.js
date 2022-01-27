import './App.css';
import React, { useEffect } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { AppUI } from './AppUI';

const todosList = [
  { id: '1', text: 'Bake cupcakes', completed: false },
  { id: '2', text: 'Prepare hot chocolate', completed: true },
  { id: '3', text: 'Prepare popcorn', completed: false },
]
const initTodosFromLocalStorage = () => {
  let localStorageTodos = JSON.parse(localStorage.getItem('TODOS_v1'));

  localStorage.setItem('TODOS_v1', JSON.stringify(todosList));
  
  if (localStorageTodos === null) {
    localStorage.setItem('TODOS_v1', JSON.stringify([]));
    localStorageTodos = [];
  }

  return localStorageTodos;
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_v1', []);

  let completedTodos;
  let totalTodos;

  if (todos.length > 0) {
    completedTodos = todos.filter(todo => todo.completed).length;
    totalTodos = todos.length;
  }

  const filterTodos = (word) => {
    // if word '' return all todos
    if (word === '' || word === null) saveTodos(todos);

    // filter todos that includes word in text
    saveTodos(todos.filter(todo => todo.text.toLowerCase().includes(word)));
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  console.log('render antes')
  
  useEffect(() => {
    console.log('use effect')
  }, [totalTodos]);

  console.log('render despues')
  
  return (
    <AppUI
      total={totalTodos}
      completed={completedTodos}
      filterTodos={filterTodos}
      todos={todos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
