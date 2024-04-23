import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './actions/Actions';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
        <h1>Счётчик: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())} disabled={count === 0}>-</button>
        <button onClick={() => dispatch(incrementByAmount())}>Добавить 10</button>
        <button onClick={() => dispatch(reset())}>Очистить</button>
      </div>
  );
}

export default App;

