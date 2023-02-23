import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import NavBar from "../NavBar/NavBar"
// import PokemonDetails from "../PokemonDetails/PokemonDetails"
import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
import { Route, Switch } from "react-router-dom"
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
  const [pokemon, setPokemon] = useState<any[]>([])
  const [randomIds, setRandomIds] = useState<string[]>([])
  const dataFetchedRef = useRef(false);

  const randomizeIds = () => {
    const nums = [...new Array(5)].map(() => Math.floor(Math.random() * 1008).toString())
    setRandomIds(nums)
    return nums
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const promises = randomizeIds().map((id) => {
      return fetchData(id)
    })
    Promise.all(promises)
      .then(results => {
        const randomPokemon = results.map(result => result)
        setPokemon(randomPokemon)
      })
  }, [])

  // const getPokemon = ({ pokemon }: AppProps) => {
  //   fetchData(pokemon)
  //   .then(data => setPokemon(data))
  //   //invoke api function and use useEffect
  // }
  // useEffect(() => {
  //   fetchData("1")
  //   .then(data => setPokemon(data))
  //   .catch((error) => {setError(error.message)})
  //   console.log("pokemon", pokemon)
  //   // getPokemon()
  // }, [])
  // const showMain = ({ mainpage }: AppProps) => {
  //   mainpage = true
  //   setMainPage(mainpage)
  // }

  return (
    <div className="App">
      <NavBar />
      {/* // { error && error } */}
      <Switch>
      <Route 
          exact path="/"
          render={() => 
            <div>
            {/* <div style={{display: error ? "block" : "none"}}>{error}</div> */}
              <PokemonMain pokemonList={pokemon}/>
            </div>
          }
        />
      {/* <Route 
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
        /> */}
      {/* <Route>
          <ErrorPage />
        </Route> */}
      </Switch>
    </div>


  );
}

//pass down pokemon object to detailspage

export default App;
