import React from 'react'
import './PokemonMain.css'

// interface PokemonMain extends React.Props<any> {
//   characters:number[]
// }
//Components have only one parameter which is the props object
const PokemonMain = (props: {characters: number[]}): JSX.Element => {
  return (
    <div>
      <h1>{props.characters}</h1>
      <h2>Welcome to Pokemon App Whatever the name is I forget</h2>
    </div>
  )
}
export default PokemonMain

//need a card file
//need a swiper/slider file
//need a search file
// type MainProps = {
//   pokemon: number[]
// }

// const PokemonMain = ({ pokemon }): MainProps => {

//   const pokeList = poke.map(poke => {
//     return (
//       <div className="pokeContainer">
//         <Link to={`/${pokemon.id}`}>
//           <Card 
//             image: { type: string } = {pokemon.image}
//             name: { type: string } = {pokemon.name}
//           />
//         </Link>
//       </div>
//     )
//   })

//   return (
//     <main className='main'>
//       <div> 
//       error={error} handleSearch={handleSearch} 
//       </div>
//       { searchInput ? <SearchedCards searchInput={searchInput} searchedCards={searchedCards} /> :
//         <section className="cards-display">
//           <h2>Pokemon</h2>
//           <Slider cards={cards} scroll={true} />
//         </section>
//       }
//     </main>
//   )
// }