import { List, ListItem, ListItemText,ListItemAvatar,Button} from '@material-ui/core'
import React from 'react';
import db from './firebase';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} />
            </ListItem>
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()} />
            
        </List>
        
    )
}

export default Todo
