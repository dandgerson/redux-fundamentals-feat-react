export default function combineReducersExampble() {
  console.log("combineReducer");

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

  const reducer = (state = initialState, action) => {
    if (action.type === t.ADD_TASK) {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }

    if (action.type === t.ADD_USER) {
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...action.payload,
            id: Math.random(),
          },
        ],
      };
    }

    return state;
  };
}
