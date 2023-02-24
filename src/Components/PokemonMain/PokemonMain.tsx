import React, { useState, useEffect } from 'react'
import './PokemonMain.css'
import { Link } from 'react-router-dom'
import fetchData from '../../ApiCalls'
// import Card from '../Card/Card'

type MainProps = {
  searchName: any
}

type InputEvent = React.ChangeEvent<HTMLInputElement>

const PokemonMain = ({searchName}: MainProps) => {

  const [searchInput , setSearchInput] = useState("")
  
  const handleChange = (e : InputEvent) => {
    e.preventDefault();
    setSearchInput(e.target.value)
    searchName(searchInput)
  }

  return (
    <main className='main'>
      <form >
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={handleChange}
          value={searchInput}
          required/>
          <Link to={`/${searchInput}`}>
            <button type="submit">Submit</button>
          </Link>
      </form>
    </main>
  )
}

export default PokemonMain