import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksSlice } from "./store/tasksSlice";

const Tasks = () => {
  const tasksFromStore = useSelector((state) => state.tasks);
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(tasksSlice.actions.add({ title: taskTitle }));
          setTaskTitle("");
        }}
      >
        <label htmlFor="task-title">Title</label>
        <input
          type="text"
          is="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="New Task"
        />
      </form>

      <div className="tasksList">
        {tasksFromStore.map((task) => (
          <div key={task.id} className="task">
            <div className="human_title">{task.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
