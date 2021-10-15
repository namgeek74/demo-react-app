import { ADD_TODO, REMOVE_TODO } from './actions';

const initialTodoState = {
    todoList: []
}

const reducerTodo = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todoList: [...state.todoList, action.payload.value]
            };
        case REMOVE_TODO:
            return {
                todoList: [
                    ...state.todoList.slice(0, action.payload.value),
                    ...state.todoList.slice(action.payload.value + 1)
                ]
            };
        default:
            return state;
    }
}

export default reducerTodo;