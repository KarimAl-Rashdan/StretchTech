import React from 'react';
import { Link } from 'react-router-dom'
// import logo from '../../../public/favicon.ico'
import "../NavBar/Navbar.scss"

const NavBar = ({ }) => {

    return (
        <header className="navBar">
            <Link to='/' className="home-button">
                <img className="logo" src={""} alt="logo-img"></img>
            </Link>
            <h1>Title here?</h1>
        </header>
    )
}

export default NavBar