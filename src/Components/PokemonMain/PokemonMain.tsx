import React from 'react'
import './PokemonMain.css'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'

type MainProps = {
  pokemon: any,
  image: string,
  name: string,
}

const PokemonMain = ({ pokemon, image, name }: MainProps) => {

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

  const handleSearch = () => {
    console.log("do search here")
  }

  return (
    <main className='main'>
      {/* <div> 
      error={Error} handleSearch={handleSearch} 
      </div>
      { searchInput ? <SearchedCards searchInput={searchInput} searchedCards={searchedCards} /> :
      } */}
        <section className="cards-display">
          <h2>Pokemon</h2>
          {/* <Slider cards={cards} scroll={true} /> */}
        </section>
    </main>
  )
}

export default PokemonMain

//need a card file
//need a swiper/slider file
//need a search file