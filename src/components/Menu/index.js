import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li className="menuItem"><Link to="/login">Login</Link></li>
                    <li className="menuItem"><Link to="/register">Register</Link></li>
                    <li className="menuItem"><Link to="/upload">Upload</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;