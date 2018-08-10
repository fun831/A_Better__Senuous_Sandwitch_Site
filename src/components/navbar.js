import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
            <a href="#" className="toggle" id="navHamburger">
                <i className="fas fa-bars"></i>
            </a>
            <Link to="/" className="brand">Logo</Link>
            <div className="left">
                <Link to="/" className="link">Home</Link>
                <Link to="/menu" className="link">Menu</Link>
                <Link to="/locations" className="link">Locations</Link>
            </div>
        </div>
    );
  }
}