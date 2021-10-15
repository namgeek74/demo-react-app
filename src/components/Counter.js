import { ADD_ONE, MINUS_ONE } from '../redux/actions';
import { connect } from 'react-redux';

function Counter(props) {
    const onIncrement = () => {
        props.dispatch({ type: ADD_ONE });
    }
    const onDecrement = () => {
        props.dispatch({ type: MINUS_ONE });
    }
    return (
        <>
            <h1>{props.number}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        number: state.reducerCounter.number
    };
}

export default connect(mapStateToProps)(Counter);