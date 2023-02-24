import React, { useState, useEffect, useRef } from 'react';
import NavBar from "../NavBar/NavBar"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
import { Route } from "react-router-dom"
// import fetchData from "../../ApiCalls"

function App(): JSX.Element {
  const [searchedPoke, setPoke] = useState("")

  const searchName = (submitPoke: string) => {
    return setPoke(submitPoke)
  }
  return (
    <div className="App">
      <NavBar />
      {/* // { error && error } */}
      <Route 
        exact path="/"
        render={() => 
          <div>
          {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
            <PokemonMain searchName={ searchName }/>
          </div>
        }
      />
      <Route 
        exact path="/:name"
        render={({ match }) => {
          return (
            <div>
            {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
              <PokemonDetails pokemonName={match.params.name}/> 
            </div>
          )
        }}
      />
    </div>
  );
}

export default App;