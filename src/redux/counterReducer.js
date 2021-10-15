import { ADD_ONE, MINUS_ONE } from './actions';

const initialCounterState = {
    number: 0
}

const reducerCounter = (state = initialCounterState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                number: state.number + 1
            };
        case MINUS_ONE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default reducerCounter;