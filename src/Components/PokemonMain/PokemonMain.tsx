import React, { useState, useEffect } from 'react'
import './PokemonMain.css'
import { Link } from 'react-router-dom'
// import Card from '../Card/Card'

// type MainProps = {
//   pokemon: any,
//   image: string,
//   name: string,
//   id: string,
// }

// type onePokemon = {
//   characters: [{
//     name: string
//     id:number
//     sprites : {
//       front_default : string
//     };
//   }][]
//   onePokemon: object
// }

type InputEvent = React.ChangeEvent<HTMLInputElement>

const PokemonMain = () => {

  const [searchInput , setSearchInput] = useState("")
  const [pokemon, setPokemon] = useState<any[]>([])

  useEffect(() => {

  })

  // const pokeList = pokemon.map((poke: any) => {
  //   return (
  //     <div className="pokeContainer">
  //       <Link to={`/${pokemon.id}`}>
  //         <Card 
  //           pokemon = {pokemon}
  //           id = {pokemon.id}
  //           image = {pokemon.image}
  //           name = {pokemon.name}
  //         />
  //       </Link>
  //     </div>
  //   )
  // })

  const handleChange = (e : InputEvent) => {
    e.preventDefault();
    setSearchInput(e.target.value)
    
    // return pokeNames = pokemon.map(mon => mon.name)
  }

  return (
    <main className='main'>
      <form >
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={handleChange}
          value={searchInput}
          required/>
          <Link to={`/${searchInput}`}>
            <button type="submit">Submit</button>
          </Link>
      </form>
    </main>
  )
}

export default PokemonMain