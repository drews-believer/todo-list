import React from 'react';
import {InterfaceTodo} from "../interfaces";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    todos: InterfaceTodo[],
    todoClickedDelete: (id: number) => void
}

export const TodoList:React.FC<Props> = ({todos, todoClickedDelete}) => {
    return (
        <List>
            {todos.map((elem) => {
                return (
                    <ListItem key={elem.id}>
                        <Checkbox tabIndex={-1} disableRipple/>
                        {elem.title}
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete"  onClick={() => {todoClickedDelete(elem.id)}}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};
