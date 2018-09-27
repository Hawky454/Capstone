import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './SignIn.css';
import Footer from '../Footer/Footer';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }


    


    handleUserInput(event) {
      console.log(event.target.value);
        
    }

    

    render() {
    return(
        <div>
          <NavBar />
          <div className={classes.SignIn}>
            <form>
                <label htmlFor="email" className={classes.emailLabel}>Email:
                <input 
                    type="email" 
                    name="email" 
                    autoComplete="email" 
                    placeholder="Email" 
                    value={this.state.name} 
                    onChange={(event) => this.handleUserInput(event)}
                    />
                </label>
                <label htmlFor="password">Password: 
                <input 
                    type="password" 
                    name="password" 
                    autoComplete="password" 
                    placeholder="Password"
                    // onChange={(event) => this.handleUserInput(event)}
                    // value={this.state.password} 
                    />
                </label>
            <section className={classes.btn}>
                <button>Sign In</button>
            </section>
            </form>
          </div>
          <Footer />
        </div>
    );
  }
}

export default SignIn;