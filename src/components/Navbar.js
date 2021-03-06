import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';

import './NavbarStyle.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? "navbar navbar-bg" : "navbar"} >
            <div className={nav ? "logo dark" : "logo"}>
                <h2>Beaches.</h2>
            </div>
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Destinations</a></li>
                <li><a href="/">Travel</a></li>
                <li><a href="/">Book</a></li>
                <li><a href="/">Views</a></li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {
                    nav ? (<AiOutlineClose className="icon" style={{ color: '#000' }} />) : (<HiOutlineMenuAlt4 className="icon" />)
                }
            </div>
            <div className={nav ? "mobile-menu active" : "mobile-menu"}>
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className="mobile-menu-button">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar