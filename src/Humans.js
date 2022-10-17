import { useState } from "react";

const initialHumans = [
  {
    name: "Lol",
  },
  {
    name: "Wtf",
  },
  {
    name: "Omg",
  },
];

const Humans = () => {
  const [humans, setHumans] = useState(initialHumans);
  const [name, setName] = useState("");

  const addHuman = (name) => {
    setHumans([...humans, { name }]);
  };

  return (
    <div className="humans">
      <h2>Humans</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addHuman(name);
        }}
      >
        <label htmlFor="human-name">Name</label>
        <input
          type="text"
          is="human-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Human"
        />
      </form>

      <div className="humansList">
        {humans.map((human) => (
          <div key={human.name} className="human">
            <div className="human_name">{human.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Humans;