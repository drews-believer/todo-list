import { connect } from 'react-redux'
import { deleteTodo} from '../store/actions/actionCreators'
import {TodoList} from '../components/TodoList'
import * as ReducerType from "ReducerType";

const mapStateToProps = (state: ReducerType.ReducerState) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    todoClickedDelete: deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
