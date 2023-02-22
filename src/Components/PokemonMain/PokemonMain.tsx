import React from 'react'
import './PokemonMain.css'

type MainProps = {
  pokemon: string
}

const PokemonMain = ({ pokemon }): MainProps => {

  const pokeList = poke.map(poke => {
    return (
      <div className="pokeContainer">
        <Link to={`/${pokemon.id}`}>
          <Card 
            image: { type: string } = {pokemon.image}
            name: { type: string } = {pokemon.name}
          />
        </Link>
      </div>
    )
  })

  return (
    <main className='main'>
      <div> 
      error={error} handleSearch={handleSearch} 
      </div>
      { searchInput ? <SearchedCards searchInput={searchInput} searchedCards={searchedCards} /> :
        <section className="cards-display">
          <h2>Pokemon</h2>
          <Slider cards={cards} scroll={true} />
        </section>
      }
    </main>
  )
}

export default PokemonMain

//need a card file
//need a swiper/slider file
//need a search file