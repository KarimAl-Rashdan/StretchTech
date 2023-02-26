import React, { useState, useEffect } from "react";
import "./PokemonMain.css";
import { fetchFive } from "../../ApiCalls";
import Card from "../Card/Card";
import Form from "../Form/Form"

type MainProps = {
  datalist: string[]
}
type CharacterProps = {
  name: string;
  url?:string
}

const PokemonMain: React.FC<MainProps> = ({ datalist }:MainProps) => {
  const [pokemon, setPokemon] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  
  useEffect(() => {
    (async () => {
      await fetchFive()
        .then((data) => {
          setLoading(false)
          setPokemon(data.results)})
        .catch((error) => {
          setLoading(false)
          setError(error)
        });
    })();
  }, []);
  
    return (
      <div>
        <div style={{display: loading ? "block" : "none"}}>Loading Pokemon...</div>
        <div style={{display: error ? "block" : "none"}}><h1>{error}</h1></div>
        <Form dropdown={datalist} />
        <section className="card-grid">
          {pokemon.map((character) => {
            return <Card name={character.name} key={character.name} />
          })}
        </section>
      </div>
    )
};

export default PokemonMain;