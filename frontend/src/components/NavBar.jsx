import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-menu">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/marketplace'>Marketplace</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
        )
    }
}
