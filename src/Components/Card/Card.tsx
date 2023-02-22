import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

type CardProps = {
  image: string, 
  name: string, 
  pokemon: string, 
  id: number,
}

const Card = ({image, name, pokemon, id}: CardProps) => {
  return (
    <Link to={`/${pokemon}`} style={{ textDecoration: 'none' }}>
      <div className="card" >
        <img src={image} alt={name} className="cardImage" />
        <div className="card-info">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}
export default Card