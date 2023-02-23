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
    // this handles the event in which a user types a pokemon name in the search bar and fires everytime they type in the search bar
    // searchInput should be updating every time a user types in the search bar and searchInput should be assigned to whatever is entered into the search bar (e.target.value)
    // see Link notes below (button element inside <Link> tag)
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
          {/* This <Link> tag should route the user to the url using the pokemon name they typed into the search bar
          Error handling is still needed to ensure no routing when a pokemon is not spelled correctly */}
          {/* ***Another option is to utilize <datalist> tag and have a list of all the pokemon that gets filtered as they type out what they want to search for. 
            Pros: no mispelling errors
            Cons: it will be a very long array (1008 elements) and is dependent on getting pokemon names from the api
            - will need logic to map through all the pokemon and just return their names and store that in an array of its own to use for the <datalist>  */}
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