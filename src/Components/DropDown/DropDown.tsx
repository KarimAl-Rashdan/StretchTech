import React, { useEffect, useState } from "react"
import "./DropDown.css"
import { Link } from "react-router-dom"


type DropDownProps = {
  filteredNames: string[]
  pokemonNames: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
}
const DropDown: React.FC<DropDownProps> = ({pokemonNames,  filteredNames}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)

  useEffect(() => {
    setShowDropDown(showDropDown)
  }, [showDropDown])
  return(
    <div className={showDropDown ? "dropdown" : "dropdown active"}>
      {filteredNames.map(
        (pokemon: string, index: number): JSX.Element => {
          return (
              <Link className="options" to={`/${pokemon}`} style={{ textDecoration: "none" }}>
            <option
              key={index}
              value={pokemon}
            >
              {pokemon}
            </option>
            </Link>
          )
        }
      )}
      </div>
  )
}

export default DropDown