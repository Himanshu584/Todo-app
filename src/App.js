import React, {useState, useEffect} from 'react';
import './App.css';
import { FormControl, Input, Button, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState(['hello','world']);
  const [input, setInput] = useState('');

  useEffect(()=> {
    // fetch new todos from database when the app loads each time.
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=> {
      setTodos(snapshot.docs.map(doc=>  ({id: doc.id, todo: doc.data().todo})))
    })
  },[]);


  const addTodo = (e) => {
    e.preventDefault(); // Prevents page to restore default after addition of todo.

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()    
    })

    setInput(''); // Clear input after addition of todo.
  } 

  return (
    <div className="App">
      <h1>GALVIC-TODO</h1>
      <form>
        <FormControl>
          <InputLabel>Write Todo..</InputLabel>
          <Input text='Write Todo..'value={input} onChange= {e => setInput(e.target.value)} />          
        </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant='contained' color="primary">Add Todo</Button>
        </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
