import { addTodo} from '../store/actions/actionCreators';
import { connect } from 'react-redux';
import {TodoForm} from "../components/TodoForm";


export default connect(null, {
    handleSubmit: addTodo
})(TodoForm)
