import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './SignIn.css';
import Footer from '../Footer/Footer';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ''
        }
    }

    logInHandler = () => {
        console.log('Well, for now, I know I can go about it this way.')
      }


    render() {
    return(
        <div>
          <NavBar />
          <div className={classes.SignIn}>
            <form>
                <label htmlFor="userName">User Name:
                <input type="text" name="userName" autoComplete="userName" placeholder="User Name"/>
                </label>
                <label htmlFor="password">Pass-word : 
                <input type="password" name="password" autoComplete="password" placeholder="Password"/>
                </label>
            <section className={classes.btn}>
                <button onClick={this.logInHandler}>Sign In</button>
            </section>
            </form>
          </div>
          <Footer />
        </div>
    );
  }
}

export default SignIn;