import { createStore, applyMiddleware } from "redux";

export default function middleWare() {
  console.log("MiddleWare");

  const initialState = { value: 0 };

  const reducer = (state = initialState) => state;

  const logMiddleWare = (store) => (next) => (action) => {
    console.log("old state", store.getState(), action);

    next(action);

    console.log("new state", store.getState(), action);
  };

  const monitoreMiddleWare = (store) => (next) => (action) => {
    const start = performance.now();
    next(action);
    const end = performance.now();

    const diff = end - start;
    console.log("performance: ", { diff, state: store.getState(), action });
  };

  const store = createStore(
    reducer,
    applyMiddleware(logMiddleWare, monitoreMiddleWare)
  );

  store.dispatch({ type: "Hello" });
}
