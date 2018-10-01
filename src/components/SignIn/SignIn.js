import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
// import classes from './SignIn.css';
import Footer from '../Footer/Footer';
import './SignIn.css';


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
            <div className="sign-in-card container">
              <form>
                <h2 className="sign-in">sign In</h2>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
         <Footer />
        </div>
    );
  }
}

export default SignIn;