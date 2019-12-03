import {AddTodoAction, DeleteTodoAction} from "../../interfaces";
import {ActionTypes} from "./actions";

function addTodo(name: string): AddTodoAction {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: Date.now(),
                title: name
            }

        }
    }
}

function deleteTodo(id: number): DeleteTodoAction {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: {
            id
        }
    }
}

export {addTodo, deleteTodo}
