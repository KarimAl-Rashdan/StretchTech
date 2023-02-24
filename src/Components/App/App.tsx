import React, { useState, useEffect, useRef } from 'react';
import PokemonMain from '../PokemonMain/PokemonMain';
// import logo from './logo.svg';
// import NavBar from "../NavBar/NavBar"
// import PokemonDetails from "../PokemonDetails/PokemonDetails" 
// import PokemonMain from "../PokemonMain/PokemonMain"
import './App.css';
// import { Route, Switch} from "react-router-dom"
import fetchData from "../../ApiCalls"
// type AppProps = {
//   characters: number[]
// }
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
  const dataFetchedRef = useRef(false);

  

  const [pokemon, setPokemon] = useState<object[]>([])
  const [randomIds, setRandomIds] = useState<string[]>([])
  
  const randomizeIds = () => {
    const nums= [...new Array(5)].map(() => Math.floor(Math.random() * 1008).toString())
    console.log("nums", nums)
    setRandomIds(nums)
    return nums
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    const nums = randomizeIds()
    console.log("ran id", randomIds)
    nums.map((id: string) => {
      return fetchData(id)
      .then((data:any) => {
        console.log("data", data)
        console.log("pokemon", pokemon)
        pokemon.push(data)
        return setPokemon(pokemon)})
      })
      
    }, [])
    // const randomNums = randomizeIds()
    // randomIds:string[]
    //  const [pokemon, setPokemon] = useState<PokemonProps["pokemon"]>({name: pokemon.name, id:pokemon.id, image:pokemon.sprites.front_default})
    // const randomId1 = randomizeIds()
    // const randomId2 = randomizeIds()
    // useEffect(() => {
    //     if (dataFetchedRef.current) return;
    //     dataFetchedRef.current = true;
    //     fetchData();
    // },[])
    // let pokemon: React.FC<PokemonProps>
    // let pokemon: PokemonProps;
    // let setPokemon: any;
      // randomizeIds()
      // }
        // const randomId3 = randomizeIds()
        // setRandomIds(nums)
        // const randomId4 = randomizeIds()
        // .catch((error) => {setError(error.message)})
        // const randomId5 = randomizeIds()
        // getPokemon()
  // let pokemon = [1,2,3,4,5]
  return (
    <div className="App">
      <PokemonMain characters={pokemon} />
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