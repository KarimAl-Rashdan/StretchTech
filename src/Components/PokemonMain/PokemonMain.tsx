import React, { useState, useEffect } from "react";
import "./PokemonMain.css";
import { Link } from "react-router-dom";
import { fetchData, fetchFive } from "../../ApiCalls";
import Card from "../Card/Card";

const PokemonMain: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  let fiveArray: any = [];

  useEffect(() => {
    fetchFive().then((data) => setPokemon(data));
  }, []);

  if (pokemon) {
    fiveArray = pokemon.map((character: any) => {
      return <Card name={character.name} key={character.name} />;
    });
  }

  if (fiveArray.length > 0) {
    return (
      <main className="main">
        {/* <Form >
    </Form> */}
        <div className="card-container">{fiveArray}</div>
      </main>
    );
  }
}

export default PokemonMain;
