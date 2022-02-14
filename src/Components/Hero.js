import React from "react";
import Image2 from '../img/Group 77.png'
import '../Components/Hero.css'


const Hero = () => {

    return (

        <section className="hero-section">
            <img src={Image2} alt="hero-image" className="hero-img"></img>

            <div className="hero-content">
                <h2 className="hero-content-head">Online Experiences</h2>
                <p className="hero-content-text"> Join unique interactive activities <br /> led by one of a kind hosts - all without <br /> leaving home. </p>

            </div>
        </section>
    )
}

export default Hero;