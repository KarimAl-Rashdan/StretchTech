import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
// import './Navbar.css'
import "../NavBar/Navbar.scss"

const NavBar = () => {

    return (
        <header className="navBar">
            <Link to='/' className="home-button">
                <img className="logo" src={logo} alt="logo-img"></img>
            </Link>
            <h1>Gotta Catch 'Em All</h1>
        </header>
    )
}

export default NavBar