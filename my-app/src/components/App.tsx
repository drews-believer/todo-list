import React from "react";
import AddTodo from "../containers/AddTodo";
import Todos from "../containers/Todos";
import "../index.css"

export const App: React.FC = () => {
    return (
        <div className="app">
            <h1>My Todo list</h1>
            <AddTodo/>
            <Todos/>
        </div>
    )
};
