import React from 'react'
import './SelectImgStyle.css'
import borabora from "../../assets/borabora.jpg";

function SelectsImg() {
    return (
        <div className='selects-img'>
            <img src={borabora} alt="/" />
            <div className="overlay">
                <p>BoraBora</p>
            </div>
        </div>
    )
}

export default SelectsImg