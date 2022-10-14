import { t } from "./actions";

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === t.INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === t.DECREMENT) {
    return { count: state.count - 1 };
  }

  if (action.type === t.SET) {
    return { count: Number.parseInt(action.payload, 10) };
  }

  return state;
};
