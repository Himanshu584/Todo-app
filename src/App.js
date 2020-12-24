import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['hello','world']);
  const [input, setInput] = useState('');
  const addTodo = (e) => {
    setTodos([...todos, input]);
    e.preventDefault();
    setInput('');
  } 

  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <form>
        <input value={input} onChange= {e => setInput(e.target.value)}/>
        <button type='submit' onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
