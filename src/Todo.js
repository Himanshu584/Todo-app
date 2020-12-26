import { List, ListItem, ListItemText,ListItemAvatar,Button} from '@material-ui/core'
import React from 'react';
import db from './firebase';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Todo(props) {
    return (
        <List className='todo__list'>

            <ListItem className='list__item'>
                <ListItemAvatar>
                    <FiberManualRecordIcon />
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} />
            </ListItem>
            <Button className='list__button' onClick={e => db.collection('todos').doc(props.todo.id).delete()} >
                <DeleteForeverIcon />
            </Button>
            
        </List>
        
    )
}

export default Todo
