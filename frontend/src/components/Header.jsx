import React, { Component } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header-title"><Link to='/'>Online Shopping Application</Link></h1>
            </div>
        )
    }
}
