import SetCounter from "./SetCounter";
import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement, set } = useCounter();

  return (
    <div className="counter">
      <h1>Days Since Last Incident</h1>
      <div className="count">{count}</div>
      <div className="controlls">
        <button className="button" onClick={() => increment()}>
          Increment
        </button>
        <button className="button" onClick={() => set(0)}>
          Reset
        </button>
        <button className="button" onClick={() => decrement()}>
          Decrement
        </button>
      </div>

      <SetCounter />
    </div>
  );
};

export default Counter;
