import React from 'react'
import './DestinationStyle.css'
import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import keywest from "../../assets/keywest.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";



function Destinations() {
    return (
        <div className='destination'>
            <div className="container">
                <h1>Al-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={borabora} alt="/" />
                    <img src={borabora2} alt="/" />
                    <img src={maldives} alt="/" />
                    <img src={keywest} alt="/" />
                    <img src={maldives2} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destinations