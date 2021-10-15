import { ADD_TODO, REMOVE_TODO } from '../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';

function Todo(props) {
    const [currentTodo, setCurrentTodo] = useState('');
    const changeCurrentTodo = (e) => {
        setCurrentTodo(e.target.value);
    }

    const addTodo = () => {
        props.dispatch({
            type: ADD_TODO,
            payload: {
                value: currentTodo
            }
        });
        setCurrentTodo('');
    }

    const deteleTodo = (index) => {
        props.dispatch({
            type: REMOVE_TODO,
            payload: {
                value: index
            }
        });
    }
    return (
        <>
            <h1>Todo App</h1>
            <label>Action: </label>
            <input value={currentTodo} onChange={changeCurrentTodo} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {
                    props.todoList.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                            <button onClick={() => deteleTodo(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return { todoList: state.todoList };
}

export default connect(mapStateToProps)(Todo);