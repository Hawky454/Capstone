import React from 'react';
import NavBar from '../NavBar/NavBar';
// import './Cellar.css'

const Cellar = (props) => {
    return(
        <div className="Cellar">
            <NavBar />
            <h1>This is just a crude example to see if I can make routes work.</h1>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    );
}

export default Cellar;