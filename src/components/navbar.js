import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <Link to="/" > <img src='http://sensuoussandwich.com/Images/SSlogoNew.gif' alt='logo' /> </Link>
                </div>
                <div className="nav">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/menu" className="link">Menu</Link>
                    <Link to="/locations" className="link">Locations</Link>
                </div>

            </div>
        );
    }
}