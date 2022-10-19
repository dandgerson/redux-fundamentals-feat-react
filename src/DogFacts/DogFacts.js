import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogFactsFromAPI } from "../store/dogFactsSlice";

const DogFacts = () => {
  const [numberOfDogFacts, setNumberOfDogFacts] = useState(1);
  const dogFacts = useSelector((state) => state.dogFacts.facts);
  const loading = useSelector((state) => state.dogFacts.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(fetchDogFactsFromAPI(numberOfDogFacts));
        }}
      >
        <label
          htmlFor="number-of-dog-facts"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          Number of dog facts
          <input
            type="number"
            name="number-of-dog-facts"
            id="number-of-dog-facts"
            value={numberOfDogFacts}
            onChange={(e) => setNumberOfDogFacts(e.target.value)}
          />
        </label>

        <button>Fetch</button>
      </form>

      {loading ? (
        <div>...Loading</div>
      ) : (
        dogFacts.map((dogFact, i) => (
          <div key={i}>
            <h2>Dog fact {i + 1}</h2>
            <p>{dogFact}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DogFacts;
