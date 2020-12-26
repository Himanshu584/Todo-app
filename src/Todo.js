import { List, ListItem, ListItemText,ListItemAvatar,Button} from '@material-ui/core'
import React from 'react';
import db from './firebase';
import './Todo.css';
function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='I am a todo'/>
            </ListItem>
            <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()}>Delete Todo</Button>
        </List>
        
    )
}

export default Todo
