import React from 'react'
import Gold from '../../assets/gold.png'
import './Search.css'

function Search() {
    return (
        <div className='search' >
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLES</h2>
                    <p>We have a React application that we would like to add some dashboards and functions - pretty standard and simple. We need an experienced React developer with UX/UI touch. Currently it is a small task, but will open a potential opportunity to work with us in long term projects. We need an experienced React developer with UX/UI touch. Currently it is a small task, but will open a potential opportunity to work with us in long term projects.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">
                            GET AN ADDITIONAL 7% OFF
                        </h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Grande Antiqua</option>
                                <option value="1">Grande</option>
                                <option value="1">Bora Bora</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type={"date"} placeholder="mm/dd/yyyy" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type={"date"} placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <button>Rates & Availabiliteis </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search