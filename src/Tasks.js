import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksSlice } from "./store/tasksSlice";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
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
          id="task-title"
          className="input"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="New Task"
        />
      </form>

      <div className="tasksList">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
