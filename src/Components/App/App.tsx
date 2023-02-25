import React, { useState, useEffect, useRef } from "react";
// import logo from './logo.svg';
import NavBar from "../NavBar/NavBar";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonMain from "../PokemonMain/PokemonMain";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {fetchData} from "../../ApiCalls";

function App() {
  const [searchedPoke, setPoke] = useState("");

  const searchName = (submitPoke: string) => {
    return setPoke(submitPoke);
  };
  return (
    <div className="App">
      <NavBar />
      {/* // { error && error } */}
      <Route
        exact
        path="/"
        render={() => (
          <div>
            {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
            <PokemonMain />
          </div>
        )}
      />
      <Route
        exact
        path="/:name"
        render={() => {
          return (
            <div>
              {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
              <PokemonDetails pokemonName={searchedPoke} />
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
