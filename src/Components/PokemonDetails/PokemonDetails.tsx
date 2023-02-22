import React, { useEffect, useState } from 'react'
import  fetchData from '../../ApiCalls'
//passing in an array of one pokemon object
const PokemonDetails: React.FC<{pokemonId: number}> = () => {
    // const [pokemon, setPokemon] = useState({})
    // const [error, setError] = useState('')

    // useEffect(() => {
    //     fetchData(pokemonId)
    //         .then(data => {
    //             setPokemon(data)
    //         })
    //         .catch(error => {
    //             setError(error)
    //         })
    // })
//maybe pass down apicall in app
//     const starterMoves = pokemon.moves.filter(move =>
//         move.version_group_details.some(
//             versionGroupDetail =>
//                 versionGroupDetail.move_learn_method.name === 'level-up' &&
//                 versionGroupDetail.level_learned_at === 1
//         )
//     ).map(move => move.move.name);

//     return (
//         <div>
//             <div>
//                 <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
//             </div>
//             <div className="pokemon-details">
//                 <h2 className="pokemon-name">{pokemon.name}</h2>
//                 <p className="pokemon-id">ID: {pokemon.id}</p>
//                 <p className="pokemon-order">Order: {pokemon.order}</p>
//                 <p className="pokemon-height">Height: {pokemon.height / 10} m</p>
//                 <p className="pokemon-weight">Weight: {pokemon.weight / 10} kg</p>
//                 <p className="pokemon-types">
//                     Types: {pokemon.types.map(type => type.type.name).join(', ')}
//                 </p>
//                 <p className="pokemon-stats-header">Stats:</p>
//                 <ul className="pokemon-stats">
//                     {pokemon.stats.map(stat => (
//                         <li key={stat.stat.name}>
//                             <span className="stat-name">{stat.stat.name}:</span>
//                             <span className="stat-value">{stat.base_stat}</span>
//                         </li>
//                     ))}
//                 </ul>
//                 <p className="pokemon-starter-move">
//                     Starter Move: {starterMoves.length > 0 ? starterMoves : 'None'}
//                 </p>
//             </div>
//         </div>
//     );
}

export default PokemonDetails