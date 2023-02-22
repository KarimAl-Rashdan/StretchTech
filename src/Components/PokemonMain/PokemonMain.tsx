import React from 'react'
import './PokemonMain.css'
import Card from "../Card/Card"

type MainProps = {
  // characters: {
  //   sprites : {
  //     front_default : string
  //   };
    image: string;
    alt: string;
    num: number;
  // }
}
//Components have only one parameter which is the props object
const PokemonMain = ({image, alt, num}: MainProps) => {
  return (
    <div>
      {/* <h1>{characters}</h1> */}
      <h2>Welcome to Pokemon App Whatever the name is I forget</h2>
      <Card image={image} name={alt} id={num}/>
      <Card image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} name={"charmander"} id={4}/>
      <Card image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} name={"charmander"} id={4}/>
      <Card image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} name={"charmander"} id={4}/>
      <Card image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} name={"charmander"} id={4}/>
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