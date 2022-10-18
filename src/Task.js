import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksSlice, toggleTask } from "./store/tasksSlice";

const Task = ({ task }) => {
  const [assignee, setAssignee] = useState("");

  const humans = useSelector((state) => state.humans);
  const dispatch = useDispatch();

  return (
    <div className="task">
      <label className="task_title">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() =>
            dispatch(
              tasksSlice.actions.toggle({ id: task.id, isDone: !task.isDone })
              // or make it with createAction api
              // toggleTask(task.id, !task.isDone)
            )
          }
        />
        {task.title}
      </label>

      <form>
        <select
          name="assignee"
          id="assignee"
          className="input"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="">(Unassigned)</option>
          {humans.map((human) => (
            <option key={human.id} value={human.id}>
              {human.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Task;
