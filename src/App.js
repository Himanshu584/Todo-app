import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['hello','world']);

  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
