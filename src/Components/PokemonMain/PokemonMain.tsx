import React, { useState, useEffect } from "react";
import "./PokemonMain.css";
import { Link } from "react-router-dom";
import { fetchData, fetchFive } from "../../ApiCalls";
import Card from "../Card/Card";
import Form from "../Form/Form"

type MainProps = {
  searchName: any
}

const PokemonMain: React.FC<MainProps> = ({searchName}) => {
  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await fetchFive()
        .then((data) => {
          setPokemon(data.results)})
        .catch((error) => console.log(error));
    })();
  }, []);

  if (pokemon) {
    return (
      <div>
        <Form searchName={searchName}/>
        {pokemon.map((character: any) => {
          return <Card name={character.name} key={character.name} />
        })}
      </div>)
  } else {
    return <h1>Loading Pokemon...</h1>;
  }
};

export default PokemonMain;