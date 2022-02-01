import React from 'react'
import '../style/main.css'
import Logo from '../images/Logo.png'
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <Link to='/'><img id="logo" src={Logo} alt="My logo"></img></Link>
                <div className="NavLink">
                    <div><Link to='/About' id="link-space">About me</Link></div>
                    <div><Link to='/History' id="link-space">History</Link></div>
                    <div><Link to='/Skills' id="link-space">Skills</Link></div>
                    <div><Link to='/Gallery' id="link">Gallery</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;