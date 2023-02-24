import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

type CardProps = {
  image: string, 
  name: string, 
  // pokemon: string, 
  id: number,
}
//delete pokemon in parameter
const Card = ({image, name, id}: CardProps) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
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