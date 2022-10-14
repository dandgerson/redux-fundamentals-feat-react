import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "./actions";
import SetCounter from "./SetCounter";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Days Since Last Incident</h1>
      <div className="count">{count}</div>
      <div className="controlls">
        <button className="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="button" onClick={() => dispatch(set(0))}>
          Reset
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <SetCounter />
    </div>
  );
};

export default Counter;
