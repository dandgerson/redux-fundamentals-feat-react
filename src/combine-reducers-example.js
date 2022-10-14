import { combineReducers, legacy_createStore } from "redux";

export default function combineReducersExampble() {
  const initialState = {
    users: [
      { id: 1, name: "lol" },
      { id: 1, name: "wtf" },
    ],
    tasks: [{ title: "make it lol" }, { title: "make it wtf" }],
  };

  const t = {
    ADD_USER: "add_user",
    ADD_TASK: "add_task",
  };

  const addUser = (name) => ({ type: t.ADD_USER, payload: { name } });
  const addTask = (title) => ({ type: t.ADD_TASK, payload: { title } });

  const usersReducer = (state = initialState.users, action) => {
    if (action.type === t.ADD_USER) {
      return [
        ...state,
        {
          ...action.payload,
          id: Math.random(),
        },
      ];
    }

    return state;
  };

  const tasksReducer = (state = initialState.tasks, action) => {
    if (action.type === t.ADD_TASK) {
      return [...state, action.payload];
    }

    return state;
  };

  const rootReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
  });

  const store = legacy_createStore(rootReducer);

  console.log(store.getState());
}
