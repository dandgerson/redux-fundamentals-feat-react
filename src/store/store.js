import { combineReducers, createStore } from "redux";
import itemsReducer from "./itemsReducer";
import tipPercentageReducer from "./tipPercentageReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
  tipPercentage: tipPercentageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
