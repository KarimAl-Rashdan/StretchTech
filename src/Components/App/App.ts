import React, { useState } from 'react';
import logo from './logo.svg';
import NavBar from "../NavBar/NavBar"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
import { Route, Switch} from "react-router-dom"

type AppProps = {
  pokemon: {
    id: number;
    name: string;
  }[];
  chosenPokemon: {};
  error: string;
  mainpage: boolean;
}
function App() {
  const [pokemon, setPokemon] = useState([])
  const [chosenPokemon, setChosenPokemon] = useState({})
  const [error, setError] = useState("")
  const [mainpage, setMainPage] = useState(true)

  
  const getPokemon = ({ pokemon }: AppProps) => {
    //invoke api function and use useEffect
  }

  // const showMain = ({ mainpage }: AppProps) => {
  //   mainpage = true
  //   setMainPage(mainpage)
  // }

  const showInfo = ({ id }: AppProps) => {
    mainpage = false
    chosenPokemon = pokemon.find(pokemon => pokemon.id === id)
    setChosenPokemon(chosenPokemon)
  }
  return (
    <div className="App">
      <NavBar pageView={mainpage} showMain={showMain}/>
      // { error && error }
      <Switch>
        <Route 
          exact path="/"
          render={() => 
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonMain pokemonList={pokemon} showInfo={showInfo}/>
            </div>
          }
        />
        <Route 
        exact path="/:id"
        render={{ match }} => {
          return (
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonDetails id={match.params.id}/> 
            </div>
          )
        }
        />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>

      
  );
}



export default App;
