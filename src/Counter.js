import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "./actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Days Since Last Incident</h1>
      <div className="count">{count}</div>
      <div className="controlls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
