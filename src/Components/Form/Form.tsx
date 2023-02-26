import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import DropDown from "./DropDown"
import { GrSearch } from "react-icons/gr"

type InputTarget = React.ChangeEvent<HTMLInputElement>
type UIEvent = React.UIEvent<HTMLButtonElement>

type MainProps = {
    dropdown:string[]
}
type FilterProps = {
    list:string[]
    name:string
}


const Form: React.FC<MainProps>= ({ dropdown} : MainProps): JSX.Element => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState("")
    const [filter, setFilter] = useState<string[]>([])
    const pokemonNames = () => {
        return dropdown
    }
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown)
    }
    const dismissHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
            if(event.currentTarget === event.target) {
            setShowDropDown(false)
        }
    }

    const handleChange = (e : InputTarget) => {
        e.preventDefault()
        setSearchInput(e.target.value)
        
        const filteredNames = dropdown.reduce<any>((list, name):FilterProps => {
            if(name.includes(e.target.value.toLowerCase())) {
                list.push(name)
            }
            return list
        },[])
        setFilter(filteredNames)
    }

    const handleClick = (e : UIEvent) => {
        setSearchInput(searchInput.toLowerCase())
    }

    return (
        <form >
            <h2>Who are you looking for? Search Pokemon by their name</h2>
            <div className='searchContainer'>
                <div className="search-wrapper">
                    
                    <span className="icon">
                        <GrSearch />
                    <input 
                        
                        className={showDropDown ? "active" : undefined}
                        onClick={(): void => toggleDropDown()}
                        // onBlur={(e: React.FocusEvent<HTMLInputElement>): void => dismissHandler(e)}
                        type="text" 
                        placeholder= "Search..."
                        value={searchInput}
                        list="dropdown-input" 
                        onChange={handleChange}
                        required>
                    </input>
                    </span>
                    <datalist className="dropdown-input">
                        {showDropDown && (
                            <DropDown
                                filteredNames={filter.length < 1 ? dropdown : filter}
                                pokemonNames={pokemonNames()}
                                showDropDown={false}
                                toggleDropDown={(): void => toggleDropDown()}
                            />
                        )}
                    </datalist>
                </div>
                <div className="searchButton">
                    <Link to={`/${searchInput.toLowerCase()}`}>
                        <button onClick={handleClick} type="submit">Submit</button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default Form;