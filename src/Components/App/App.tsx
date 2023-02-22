import React, { useState, useEffect } from 'react';
import PokemonMain from '../PokemonMain/PokemonMain';
// import logo from './logo.svg';
// import NavBar from "../NavBar/NavBar"
// import PokemonDetails from "../PokemonDetails/PokemonDetails" 
// import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
// import { Route, Switch} from "react-router-dom"
import fetchData from "../../ApiCalls"
type AppProps = {
  characters:number[]
}
// type PokemonProps = {
//   id: number;
//   name: string;
//   image: string;
// }
interface PokemonProps {
  
    image: object
    name: string;
    id: number;
    // sprites: object;
  // setPokemon: any;
}
function App() { 
  // let pokemon: React.FC<PokemonProps>
  // let pokemon: PokemonProps;
  // let setPokemon: any;
  const [pokemon, setPokemon] = useState([])
  //  const [pokemon, setPokemon] = useState<PokemonProps["pokemon"]>({name: pokemon.name, id:pokemon.id, image:pokemon.sprites.front_default})
    const randomizeIds = () => {
      return Math.floor(Math.random() * 1279).toString()
    }
    useEffect(() => {
      const randomId = randomizeIds()
      fetchData(randomId)
      .then(data => setPokemon(data))
      // .catch((error) => {setError(error.message)})
      // getPokemon()
      
    }, [pokemon])
    console.log("pokemon", pokemon)
  // let pokemon = [1,2,3,4,5]
  return (
    <div className="App">
      <PokemonMain image={pokemon.sprites.front_default} alt={pokemon.name} num={pokemon.id}/>
    </div>
  )
}

export default App;
// image={pokemon.sprites.front_default} alt={pokemon.name} num={pokemon.id}/>
// type AppProps = {
//   pokemon: {
//     id: string;
//   }[];
//   chosenPokemon: {};
//   error: string;
//   mainpage: boolean;
// }
//   // const [chosenPokemon, setChosenPokemon] = useState({})
//   // const [error, setError] = useState("")
//   // const [mainpage, setMainPage] = useState(true)

  
//   // const getPokemon = ({ pokemon }: AppProps) => {
//   //   fetchData(pokemon)
//   //   .then(data => setPokemon(data))
//   //   //invoke api function and use useEffect
//   // }
//   // const showMain = ({ mainpage }: AppProps) => {
//   //   mainpage = true
//   //   setMainPage(mainpage)
//   // }

//   return (
//     <div className="App">
//     </div> */}

      
//   );
// }

//   //pass down pokemon object to detailspage

      {/* <NavBar pageView={mainpage} showMain={showMain}/>
      // { error && error } */}
      // <Switch>
        {/* <Route 
          exact path="/"
          render={() => 
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonMain pokemonList={pokemon} showInfo={showInfo}/>
            </div>
          }
        /> */}
        {/* <Route 
        exact path="/:id"
        render={({ match }) => {
          console.log("look here match", match.params)
          return (
            <div>
            <div style={{display: error ? "block" : "none"}}>{error}</div>
              <PokemonDetails pokemonId={pokemon.id}/> 
            </div>
          ) */}
        {/* }}
        />
        {/* <Route>
          <ErrorPage />
        </Route> */}
      {/* </Switch> */}