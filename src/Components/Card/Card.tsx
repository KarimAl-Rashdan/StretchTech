import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../ApiCalls";
import "./Card.css";

type CardProps = {
  // image: string,
  name: string;
  // pokemon: string,
  // id: number,
};

// const Card: React.FC<CardProps> = ({ name }) => {
//   const [pokeCard, setPokecard] = useState<any>([]);
//   useEffect(() => {
//     fetchData(name).then((data) => setPokecard(data));
//   });

  console.log("name from card", name);
  if (pokeCard) {
    return (
      <Link to={`/${pokeCard.name}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <img
            src={pokeCard.sprites?.other?.dream_world?.front_default}
            alt={pokeCard.name}
            className="cardImage"
          />
          <div className="card-info">
            <p>{pokeCard.name}</p>
          </div>
        </div>
      </Link>
    );
  }
};
export default Card;
