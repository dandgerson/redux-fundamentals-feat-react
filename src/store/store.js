import { combineReducers, createStore } from "redux";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
