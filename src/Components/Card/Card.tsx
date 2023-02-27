import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../ApiCalls";
import "./Card.css";

type CardProps = {
  name: string;
  key: string;
};
type PokeCardProps = {
  name?: string;
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

const Card: React.FC<CardProps> = ({ name }: CardProps) => {
  const [pokeCard, setPokecard] = useState<PokeCardProps>({});
  useEffect(() => {
    (async () => {
      await fetchData(name)
        .then((data:PokeCardProps) => {
          return setPokecard(data)})
        .catch((error: string) => console.log(error));
    })();
  }, [name]);

  return (
    <button className="card"> 
      <Link to={`/${pokeCard.name}`} style={{ textDecoration: "none" }}>
      <img
      src={pokeCard.sprites?.other['official-artwork'].front_default} 
        alt={pokeCard.name}
        className="cardImage"
      />
      <div className="card-info">
        <p>{pokeCard.name}</p>
      </div>
      </Link>
    </button>
    );
};
export default Card;
