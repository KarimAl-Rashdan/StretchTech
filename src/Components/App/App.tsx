import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import NavBar from "../NavBar/NavBar"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
import { Route, Switch} from "react-router-dom"
import fetchData from "../../ApiCalls"

type AppProps = {
  pokemon: {
    id: string;
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

  
  // const getPokemon = ({ pokemon }: AppProps) => {
  //   fetchData(pokemon)
  //   .then(data => setPokemon(data))
  //   //invoke api function and use useEffect
  // }
  useEffect(() => {
    fetchData("1")
    .then(data => setPokemon(data))
    .catch((error) => {setError(error.message)})
    console.log("pokemon", pokemon)
    // getPokemon()
  }, [])
  // const showMain = ({ mainpage }: AppProps) => {
  //   mainpage = true
  //   setMainPage(mainpage)
  // }

  return (
    <div className="App">
      {/* <NavBar pageView={mainpage} showMain={showMain}/>
      // { error && error } */}
      <Switch>
        {/* <Route 
          exact path="/"
          render={() => 
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonMain pokemonList={pokemon} showInfo={showInfo}/>
            </div>
          }
        /> */}
        <Route 
        exact path="/:id"
        render={({ match }) => {
          console.log("look here match", match.params)
          return (
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonDetails pokemonId={pokemon.id}/> 
            </div>
          )
        }}
        />
        {/* <Route>
          <ErrorPage />
        </Route> */}
      </Switch>
    </div>

      
  );
}

  //pass down pokemon object to detailspage

export default App;
