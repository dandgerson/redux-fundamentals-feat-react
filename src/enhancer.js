import { createStore, compose } from "redux";

export default function enhancer() {
  console.log("Enhancer");

  const initialState = { value: 0 };

  const reducer = (state = initialState) => state;

  const monitorEnhancer =
    (createStore) => (reducer, initialState, enhancer) => {
      const monitorReducer = (state, action) => {
        const start = performance.now();

        const newState = reducer(state, action);

        const end = performance.now();
        const diff = end - start;
        console.log("monitorEnhancer:", { diff });

        return newState;
      };

      return createStore(monitorReducer, initialState, enhancer);
    };
  const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const logReducer = (state, action) => {
      console.log("logEnhancer", { state, action });
      const newState = reducer(state, action);
      console.log("logEnhancer:", { newState });

      return newState;
    };

    return createStore(logReducer, initialState, enhancer);
  };

  const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));

  store.dispatch({ type: "Hello" });
}
