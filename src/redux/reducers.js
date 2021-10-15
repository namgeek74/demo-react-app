import { ADD_ONE, MINUS_ONE, ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
    number: 0,
    todoList: [],
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                number: state.number + 1
            };
        case MINUS_ONE:
            return {
                ...state,
                number: state.number - 1
            };
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload.value]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todoList: [
                    ...state.todoList.slice(0, action.payload.value),
                    ...state.todoList.slice(action.payload.value + 1)
                ]
            };
        default:
            return state;
    }
}