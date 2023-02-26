import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import PokemonMain from "../PokemonMain/PokemonMain";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import { fetchData } from "../../ApiCalls";

type pokeType  = {
  name: string
  url?:string
}
function App(): JSX.Element {
  const [pokemonNames, setPokemonNames] = useState<string[]>([])
  useEffect(() => {
    (async () => {
      await fetchData()
        .then((data) => {
          const names = data.results.map((pokeObject: pokeType) => pokeObject["name"])
          return setPokemonNames(names)})
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact path="/"
          render={() => (
              <main className="main">
                <div className="card-container">
                  <PokemonMain datalist={pokemonNames}/>
                </div>
              </main>
          )}
        />
        <Route
          exact path="/:name"
          render={({match}) => {
            return (
                <PokemonDetails pokemonName={match.params.name} />
            );
          }}
        />
        <Route render={() => {
          return (
            <ErrorPage />
          )
        }}/>
      </Switch>
    </div>
  );
}

export default App;
