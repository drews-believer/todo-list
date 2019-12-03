import { createStore } from "redux";
import {todoReducer} from './reducers/reducers'

export const store = createStore(todoReducer);
