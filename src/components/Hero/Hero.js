import React from 'react';
import { Link } from 'react-router-dom'; 
import header from '../../assets/a.jpg';
import './hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={header} alt="Hero" />
            <div className="overlay">
                <h1>High Quality Product With High Nutrition</h1>
                <h3>Welcome to Prisco Poultry Producers Pvt. Ltd.</h3>
                <div className="buttons">
                    <Link to="/UserAboutPrisco">
                        <button className="button1">About</button>
                    </Link>
                    <Link to="/Contactus">
                        <button className="button2">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
