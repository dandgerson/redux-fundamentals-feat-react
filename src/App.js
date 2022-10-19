import DogFacts from "./DogFacts/DogFacts";
import StarWars from "./StarWars/StarWars";

const App = () => {
  return (
    <div className="app">
      <StarWars />
      <hr />

      <DogFacts />
    </div>
  );
};

export default App;
