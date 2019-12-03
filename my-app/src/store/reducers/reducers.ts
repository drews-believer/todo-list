import {State} from "../../interfaces";
import {ActionTypes} from "../actions/actions";
import * as ActionType from "ActionType";

export const initialState: State = {
    todos: []
};

export function todoReducer(state: State = initialState, action: ActionType.Action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            };
        }

        case ActionTypes.DELETE_TODO: {
            return  {
                ...state,
                todos: state.todos.filter(task => task.id !== action.payload.id)
            }
        }

        default :
            return  state;
    }
}
