import React from 'react';
import classes from './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return(
        <div className={classes.NavBar}>
          <Link to="/"><a className={classes.left}>The Tobacco Cellar</a></Link>
          <Link to="/Cellar"><a className={classes.left}>Cellar</a></Link>
          <Link to="/Pipes"><a className={classes.left}>Pipes</a></Link>
          <section>
            <Link to="/SignUp"><a className={classes.right}>Sign Up</a></Link>
            <Link to="/SignIn"><a onClick={() => props.clicked} className={classes.right}>Sign In</a></Link>
          </section>
        </div>
    );
}

export default NavBar;