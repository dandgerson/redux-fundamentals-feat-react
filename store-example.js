import { bindActionCreators, createStore } from "redux";

const storeExample = () => {
  const initialState = {
    value: 0,
  };

  const INCREMENT = "INCREMENT";
  const ADD = "ADD";

  const increment = () => ({ type: INCREMENT });
  const add = (amount) => ({ type: ADD, payload: amount });

  const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
      return { value: state.value + 1 };
    }

    if (action.type === ADD) {
      return { value: state.value + action.payload };
    }

    return state;
  };

  const store = createStore(reducer);

  const actions = bindActionCreators(
    {
      increment,
      add,
    },
    store.dispatch
  );

  actions.increment();
  actions.increment();
  actions.add(100);

  console.log(store.getState());
};

export default storeExample;
