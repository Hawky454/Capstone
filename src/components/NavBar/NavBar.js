import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return(
        <div className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/List">List</a></li>
            </ul>
        </div>
    );
}

export default NavBar;