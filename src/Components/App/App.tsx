import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonMain from "../PokemonMain/PokemonMain";
import "./App.css";
import { Route, Switch } from "react-router-dom";


function App(): JSX.Element {
  const [searchedPoke, setPoke] = useState("");

  const searchName = (submitPoke: string) => {
    return setPoke(submitPoke);
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <main className="main">
                <div className="card-container">
                  <PokemonMain searchName={searchName}/>
                </div>
              </main>
            </div>
          )}
        />
        <Route
          exact
          path="/:name"
          render={({match}) => {
            return (
              <div>
                {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
                <PokemonDetails pokemonName={match.params.name} />
              </div>
            );
          }}
        />
        {/* <Route exact path="*" render={() => {
          return (
            <ErrorPage />
          )
        }}/> */}
      </Switch>
    </div>
  );
}

export default App;
