import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";

const SetCounter = () => {
  const countFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  console.log("SetCounter render");

  return (
    <div className="setCounter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(set(e.target["set-to"].value));
        }}
      >
        <label htmlFor="set-to">Set count</label>
        <input
          type="number"
          id="set-to"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default SetCounter;
