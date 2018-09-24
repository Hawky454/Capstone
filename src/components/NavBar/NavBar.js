import React from 'react';
import classes from './NavBar.css';



const NavBar = (props) => {
    




    return(
        <div className={classes.NavBar}>
                <a href="/" className={classes.title}>The Tobacco Cellar</a>
                <a href="/Cellar">Cellar</a>
                <a href="/Pipes">Pipes</a>
                <a href="/Credentials">Credentials</a>
        </div>
    );
}

export default NavBar;