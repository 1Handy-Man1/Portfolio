import React from 'react'
import '../style/main.css'
import Logo from '../images/Logo.png'
import Insta from '../images/InstagramLogo.png'
import {
    Link
} from "react-router-dom";

const Footer = () => {
    return(
        <div>
            <div className="footerBar">
                <p id="textFooter">Contact</p>
                <div className="FooterHolder">
                    <div className="ContactHolder">
                        <div className="InfoCard">
                            <img id="logoFooter" src={Logo} alt="logo Footer"></img>
                            <div>
                                <p>Hanad, Shippy</p>
                                <p>(480) 717-7686</p>
                            </div>
                        </div>
                        <div>Hshippy21@gmail.com</div>
                    </div>
                    <a href="https://www.instagram.com/">
                        <img id="Instagram" src={Insta} alt="Instagram footer"></img>
                    </a>
                </div>
                <div className="FooterText">
                    <p id="CopyR-text">Copyright 2021 - 2022</p>
                    <Link to='/Secret'><p id="secret">secret</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;