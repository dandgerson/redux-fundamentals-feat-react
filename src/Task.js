import { useDispatch, useSelector } from "react-redux";
import { tasksSlice } from "./store/tasksSlice";

const Task = ({ id }) => {
  const dispatch = useDispatch();
  const humans = useSelector((state) => state.humans);
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === id)
  );

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
          value={task.assignee}
          onChange={(e) =>
            dispatch(
              tasksSlice.actions.assignToHuman({
                taskId: task.id,
                humanId: e.target.value,
              })
            )
          }
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
