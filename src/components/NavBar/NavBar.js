import React from 'react';
import './NavBar.css';
// import Radium from 'radium';


const NavBar = (props) => {
    




    return(
            <ul className="navbar-container">
                <a href="/"><li className="navbar-title">The Tobacco Cellar</li></a>
                <a href="/Cellar"><li>Cellar</li></a>
                <a href="/Pipes"><li>Pipes</li></a>
                <a href="/Credentials"><li>Credentials</li></a>
                <hr/>
            </ul>
    );
}

export default NavBar;