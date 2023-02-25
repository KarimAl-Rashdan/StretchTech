import React, { useState, useEffect } from "react";
import "./PokemonMain.css";
import { Link } from "react-router-dom";
import { fetchData, fetchFive } from "../../ApiCalls";
import Card from "../Card/Card";

// type PokemonMainProps = {
//   // image: string,
//   : any;
// }

const PokemonMain: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await fetchFive()
        .then((data) => setPokemon(data.results))
        .catch((error) => console.log(error));
    })();
  }, []);

  if (pokemon) {
    return (
      pokemon.map((character: any) => {
        return <Card name={character.name} key={character.name} />;
      }));
  } else {
    return <h1>Loading Pokemon...</h1>;
  }
};

export default PokemonMain;
