import './App.css';
import React, {useState} from 'react';

import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';

const todosList = [
  { id: '1', text: 'Bake cupcakes', completed: false },
  { id: '2', text: 'Prepare hot chocolate', completed: true },
  { id: '3', text: 'Prepare popcorn', completed: false },
]

function App() {
  const todos = todosList;
  const [listTodos, setTodos] = useState(todos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  
  const filterTodos = (word) => {
    console.log('word: ' + word);
    // if word '' return all todos
    if (word === '' || word === null) setTodos(todos);

    // filter todos that includes word in text
    setTodos(todos.filter(todo => todo.text.toLowerCase().includes(word)));
  }
  
  return (
    <>
      <div className='TodoAppContainer'>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />

        <TodoSearch onWrite={filterTodos}/>
        
        <TodoList>
          {listTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </>
  );
}

export default App;
