const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { value: state.value + 1 };
        case 'decrement':
            return { value: Math.max(0, state.value - 1) };
        case 'increment_by_amount':
            return { value: state.value + action.payload };
        case 'reset':
            return { value: 0 };
        default:
            return state;
    }
};

export default counterReducer;
