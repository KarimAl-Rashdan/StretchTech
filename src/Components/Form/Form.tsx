import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'

// type FormTarget = React.FormEvent<HTMLFormElement>
type InputTarget = React.ChangeEvent<HTMLInputElement>
type UIEvent = React.UIEvent<HTMLButtonElement>

type MainProps = {
    searchName: any
  }

const Form = ({searchName} : MainProps) => {
    const [searchInput , setSearchInput] = useState("")

    const handleChange = (e : InputTarget) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        searchName(searchInput)
    }

    // const handleSubmit = (e : FormTarget) => {
    //     e.preventDefault()
    //     searchName(searchInput)
    // }

    const handleClick = (e : UIEvent) => {
        
        searchName(searchInput.toLowerCase())
    }

    return (
        <form >
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchInput}
                onChange={handleChange}
                required
            />
            <datalist>
                <option>Pokemon Name</option>
            </datalist>
            <Link to={`/${searchInput}`}>
                <button onClick={handleClick} type="submit">Submit</button>
            </Link>
        </form>
    )
}

export default Form;