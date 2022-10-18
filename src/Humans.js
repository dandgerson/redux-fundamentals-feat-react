import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { humansSlice } from "./store/humansSlice";
import Task from "./Task";

const Humans = () => {
  const humans = useSelector((state) => state.humans);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="humans">
      <h2>Humans</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(humansSlice.actions.add({ name }));
          setName("");
        }}
      >
        <label htmlFor="human-name">Name</label>
        <input
          type="text"
          id="human-name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Human"
        />
      </form>

      <div className="humansList">
        {humans.map((human) => (
          <div key={human.id} className="human">
            <div className="human_name">{human.name}</div>
            {human.taskIds.map((id) => (
              <Task key={id} id={id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Humans;
