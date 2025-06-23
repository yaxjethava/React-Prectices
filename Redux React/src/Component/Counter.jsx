import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dicrement, increment, reset } from '../Redux/Action';
import './Counter.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="counter-wrapper">
      <div className="counter-box">
        <h1 className="counter-heading">Counter</h1>
        <p className="counter-value">{count}</p>
        <div className="button-group">
          <button className="btn" onClick={() => dispatch(increment())}>+</button>
          <button className="btn" onClick={() => dispatch(dicrement())}>−</button>
          <button className="btn reset" onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
