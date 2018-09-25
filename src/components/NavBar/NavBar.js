import React from 'react';
import classes from './NavBar.css';



const NavBar = (props) => {
    




    return(
        <div className={classes.NavBar}>
          <a href="/" className={classes.left}>The Tobacco Cellar</a>
          <a href="/Cellar" className={classes.left}>Cellar</a>
          <a href="/Pipes" className={classes.left}>Pipes</a>
          <section>
            <a href="/credentials" className={classes.right}>Sign Up</a>
            <a href="/credentials" className={classes.right}>Sign In</a>
          </section>
        </div>
    );
}

export default NavBar;