import React, {useState} from 'react';
import './App.css';
import { FormControl, Input, Button, InputLabel } from '@material-ui/core';
import Todo from './Todo';

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
        <FormControl>
          <InputLabel>Write Todo..</InputLabel>
          <Input text='Write Todo..'value={input} onChange= {e => setInput(e.target.value)} />          
        </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant='contained' color="primary">Add Todo</Button>
        </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
