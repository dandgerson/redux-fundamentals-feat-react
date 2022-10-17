import { useState } from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasksFromStore = useSelector((state) => state.tasks);
  const [task, setTask] = useState("");

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <form>
        <label htmlFor="task-title">Title</label>
        <input
          type="text"
          is="task-title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New Task"
        />
      </form>

      <div className="tasksList">
        {tasksFromStore.map((task) => (
          <div key={task.title} className="task">
            <div className="human_title">{task.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
