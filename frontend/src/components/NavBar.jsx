import React, { Component } from 'react';
import '../styles/navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        )
    }
}
