import { createStore } from "redux";

const storeExample = () => {
  const initialState = {
    value: 0,
  };

  const reducer = (state, action) => {
    return state;
  };

  const store = createStore(reducer);

  console.log("storeExample", { store });
};

export default storeExample;
