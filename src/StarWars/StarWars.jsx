import CharacterList from "./CharacterList";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import CharacterView from "./CharacterView";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersFromAPI } from "../store/charactersSlice";

const StarWars = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.characters.data);
  const loading = useSelector((state) => state.characters.loading);
  const navigate = useNavigate();

  console.log({ characters: data, loading });

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="star-wars">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <h1>Star Wars Characters</h1>
              </header>

              <main>
                <section className="sidebar">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submit");
                      dispatch(fetchCharactersFromAPI(searchTerm));
                      setSearchTerm("");
                      navigate("/");
                    }}
                  >
                    <input
                      type="search"
                      value={searchTerm}
                      placeholder="Search Character"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button disabled={!searchTerm}>Submit</button>
                  </form>

                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <CharacterList characters={data || []} />
                  )}

                  {/* {error ? <p>{error.message}</p> : null} */}
                </section>

                <section className="content">
                  <Outlet />
                </section>
              </main>
            </>
          }
        >
          <Route path="characters/:id" element={<CharacterView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default StarWars;
