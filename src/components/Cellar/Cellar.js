import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './Cellar.css';

const Cellar = (props) => {
    return(
        <div className={classes.Cellar}>
            <NavBar />
            <h1>This page will be the CELLAR page! Checking 1212...</h1>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
            <Footer />
        </div>
    );
}

export default Cellar;