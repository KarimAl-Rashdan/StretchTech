import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../ApiCalls";
import "./Card.css";

type CardProps = {
  name: string;
  key: string;
};

const Card: React.FC<CardProps> = ({ name }) => {
  const [pokeCard, setPokecard] = useState<any>({});
  useEffect(() => {
    (async () => {
      await fetchData(name)
        .then((data) => setPokecard(data))
        .catch((error) => console.log(error));
    })();
  }, [name]);

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
  else {
    return <h1>Loading Card...</h1>;
  }
};
export default Card;
