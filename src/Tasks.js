import { useState } from "react";

const tasks = [
  {
    title: "make LOL",
  },
  {
    title: "make WTF",
  },
  {
    title: "make OMG",
  },
];

const Tasks = () => {
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
        {tasks.map((task) => (
          <div key={task.title} className="task">
            <div className="human_title">{task.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
