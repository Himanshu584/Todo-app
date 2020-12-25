import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import './Todo.css';
function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={props.text} secondary='I am a todo'/>
            </ListItem>
        </List>
        
    )
}

export default Todo
