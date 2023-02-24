import React from 'react'
import './PokemonMain.css'
import Card from "../Card/Card"

type onePokemon = {
  characters: [{
    name: string
    id:number
    sprites : {
      front_default : string
    };
  }][]
  onePokemon: object
  
  // character: object
}
// type MainProps = {
//   characters: object[]
//     sprites : {
//       front_default : string
//     };
//     image: string;
//     alt: string;
//     num: number;
//   // }

// }
//Components have only one parameter which is the props object
//compenet for header card list holds all 5 cards and card
const PokemonMain = ({characters}: onePokemon) => {
  // const pokemon1 = characters.find(pokemon => pokemon.id === )
// const PokemonMain = ({image, alt, num}: MainProps) => {
  console.log("look here", characters)
  characters.map((character) => {
    // let character = characters[0]
    console.log("onePokemon", character)
    let pokeName = character["name"]
    let pokeId = character["id"]
    let pokeSrc = character["sprites"].front_default

  
  return (
    <div>
      <h1>{pokeName}</h1>
      <h2>Welcome to Pokemon App Whatever the name is I forget</h2>
      {/* {/* <Card image={pokeSrc} name={pokeName} id={pokeId}/> */}
      <Card image={pokeSrc} name={pokeName} id={pokeId}/>
      <Card image={pokeSrc} name={pokeName} id={pokeId}/>
      <Card image={pokeSrc} name={pokeName} id={pokeId}/>
      <Card image={pokeSrc} name={pokeName} id={pokeId}/>  
    </div>
  )
    // })
})
return
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