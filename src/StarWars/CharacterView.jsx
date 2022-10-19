import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import endpoint from "../store/endpoint";

const CharacterView = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(endpoint + "/characters/" + id)
      .then((response) => response.json())
      .then((data) => setCharacter(data.character))
      .catch((error) => console.log(error));
  }, [id]);

  console.log({ character });

  return (
    <div className="characterView">
      {Object.entries(character).map(([key, value]) => (
        <div key={key} className="property">
          <div className="property_name">{key}:</div>
          <div className="property_value">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default CharacterView;
