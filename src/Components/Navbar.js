import React from "react";
// import Image from '../img/airbnb1.png'
import '../Components/Navbar.css'
import Image from "../img/airbnb1.png"



const Navbar = () => {
    return (

        <div className="nav-div">
            <nav className="nav-main">

                <a href="#"><img src={Image} alt="logo" className="nav-logo"></img></a>

            </nav>

        </div>



    )
}

export default Navbar;