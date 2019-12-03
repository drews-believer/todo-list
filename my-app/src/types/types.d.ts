declare module "ReducerType" {
    import { StateType} from "typesafe-actions";
    export type ReducerState = StateType<typeof import("../store/reducers").default>;
}

declare module "ActionType" {
    import {AddTodoAction, DeleteTodoAction} from "../interfaces";
    export type Action = AddTodoAction | DeleteTodoAction;
}
