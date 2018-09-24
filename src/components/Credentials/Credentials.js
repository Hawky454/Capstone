import React from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './Credentials.css';
import Footer from '../Footer/Footer';

const Credentials = (props) => {
    return(
        <div>
          <NavBar />
          <div className={classes.Credentials}>
            <section className={classes.login}>
                <button>Log In</button>
            </section>
            <section className={classes.signup}>
                <button>Sign up</button>
            </section>
          </div>
          <Footer />
        </div>
    );
}

export default Credentials;