import React from "react";
// import Image from "../img/image12.png"
import Star from "../img/Star1.png"
// import '../Components/Card.css'

const Card = (props) => {
    // console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image"></img>

            <div className="card--stats">

                <img src={Star} className='card--star'></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) •</span>
                <span className="grey">{props.country}</span>

            </div>

            <p className="card--title">{props.title}</p>
            <p><span className="bold">{props.price}$</span>/person</p>
        </div >
    )
}

export default Card;