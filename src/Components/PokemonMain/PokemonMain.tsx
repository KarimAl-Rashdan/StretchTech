import React from 'react'
import './PokemonMain.css'
import { Link } from 'react-router-dom'
import fetchData from '../../ApiCalls'
import Form from '../Form/Form'

type MainProps = {
  searchName: any
}

const PokemonMain = ({searchName}: MainProps) => {


  return (
    <main className='main'>
      <Form searchName={searchName}/>
    </main>
  )
}

export default PokemonMain