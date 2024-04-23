export const increment = () => {
    return {
        type: 'increment'
    };
};

export const decrement = () => {
    return {
        type: 'decrement'
    };
};

export const incrementByAmount = () => {
    return {
        type: 'increment_by_amount',
        payload: 10
    };
};

export const reset = () => {
    return {
        type: 'reset'
    };
};
