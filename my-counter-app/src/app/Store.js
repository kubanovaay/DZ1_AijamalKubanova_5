import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducer/Counter';

const rootReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(rootReducer);