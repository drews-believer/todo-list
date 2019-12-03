import {ActionTypes} from "./store/actions/actions";

export interface InterfaceTodo {
    id: number;
    title: string;
}

export interface State {
    todos: InterfaceTodo[];
}

//action interfaces

export interface AddTodoAction  {
    type: ActionTypes.ADD_TODO;
    payload: { todo: InterfaceTodo }
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO;
    payload: { id: number }
}
