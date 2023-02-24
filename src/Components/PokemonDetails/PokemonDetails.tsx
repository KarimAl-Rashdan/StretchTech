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
                <div className='image-container'>
                    <img className='pokemon-image' src={pokemon.sprites?.other?.dream_world?.front_default} alt={`Image of ${pokemon.name}`} />
                </div>
                <div className="pokemon-details">
                    <h2 className="pokemon-name">{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</h2>
                    <p className="pokemon-id">ID: {pokemon.id}</p>
                    <p className="pokemon-order">Order: {pokemon.order}</p>
                    <p className="pokemon-height">Height: {pokemon.height / 10} m</p>
                    <p className="pokemon-weight">Weight: {pokemon.weight / 10} kg</p>
                    <p className="pokemon-types">
                        Types: {pokemon.types.map((type: any) => type.type.name).join(', ')}
                    </p>
                    <p className="pokemon-stats-header">Stats:</p>
                    {pokemon.stats.map((stat: any) => (
                        <div key={stat.stat.name}>
                            <span className="stat-name">{stat.stat.name}:</span>
                            <span className="stat-value">{stat.base_stat}</span>
                        </div>
                    ))}
                    <p className="pokemon-starter-move">
                        Starter Moves: {starterMoves.length > 0 ? starterMoves.map((move: any) => {
                            return <p>{move}</p>
                        }) : 'None'}
                    </p>
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