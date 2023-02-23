import React, { useState } from 'react'
import './PokemonMain.css'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import {sampleData} from '../../sampleData'

type MainProps = {
  pokemon: any,
  image: string,
  name: string,
  id: string,
}

type InputEvent = React.ChangeEvent<HTMLInputElement>

const PokemonMain = ({ pokemon}: MainProps) => {

  const [searchInput , setSearchInput] = useState("")

  const pokeList = pokemon.map((poke: any) => {
    return (
      <div className="pokeContainer">
        <Link to={`/${pokemon.id}`}>
          <Card 
            pokemon = {pokemon}
            id = {pokemon.id}
            image = {pokemon.image}
            name = {pokemon.name}
          />
        </Link>
      </div>
    )
  })

  const handleChange = (e : InputEvent) => {
    // setSearchInput to set the state to the input.value of the form
    // on submit, iterate through the pokemon list and return id and set searchInput to id 
    e.preventDefault();
    setSearchInput(e.target.value)
    
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
      {/* <div> 
      error={Error} handleSearch={handleSearch} 
      </div>
      { searchInput ? <SearchedCards searchInput={searchInput} searchedCards={searchedCards} /> :
      } */}
        <section className="cards-display">
          <h2>Pokemon</h2>
          {pokeList}
          {/* <Slider cards={cards} scroll={true} /> */}
        </section>
    </main>
  )
}

export default PokemonMain

//need a card file
//need a swiper/slider file
//need a search file