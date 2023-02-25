import React, { useEffect, useState } from 'react'
import fetchData from '../../ApiCalls'
import './PokemonDetails.css'

type PokemonDetailsProps = {
    pokemonName: string
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonName }) => {
    const [pokemon, setPokemon] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchData(pokemonName)
            .then((data: any) => {
                setPokemon(data);
                setLoading(false)
            })
            .catch((error: any) => {
                setError(error);
            });
    }, [pokemonName]);

    if (!loading) {
        const starterMoves = pokemon.moves.filter((thing: any) =>
            thing.version_group_details[0].move_learn_method.name === 'level-up' &&
            thing.version_group_details[0].level_learned_at === 1
        )
            .map((specificMove: any) => specificMove.move.name);

        return (
            <div className='pokemon-details'>
                <div className='picture-name-dimensions'>
                    <div className='name-and-id'>
                        <h2 className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                        <p className="pokemon-id">#{pokemon.id}</p>
                    </div>
                    <div className='image-container'>
                        <img className='pokemon-image' src={pokemon.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
                    </div>
                    <div className='height-and-weight'>
                        <p className="pokemon-height">Height: {pokemon.height / 10}m</p>
                        <p className="pokemon-weight">Weight: {pokemon.weight / 10}kg</p>
                    </div>
                </div>
                <div className="pokemon-info">
                    <p className="pokemon-types">
                        Type: {pokemon.types.map((type: any) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}
                    </p>
                    <div className='stats-section'>
                        <div className='stats-header-container'>
                            <p className="pokemon-stats-header">Stats:</p>
                        </div>
                        <div className='indiv-stats-container'>
                            {pokemon.stats.map((stat: any) => (
                                <div className='stats-pair' key={stat.stat.name}>
                                    <span className="stat-name">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</span>
                                    <span className="stat-value">{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pokemon-starter-move">
                        <p className='starter-moves-title'>Starter Moves:</p>
                        <div className='moves-grid'>
                            {starterMoves.length > 0 ? starterMoves.map((move: any) => {
                                return <div className='move-container'>
                                    <p>{move.charAt(0).toUpperCase() + move.slice(1)}</p>
                                </div>
                            }) : 'None'}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h1>Loading Pokemon</h1>
        );
    }
};

export default PokemonDetails