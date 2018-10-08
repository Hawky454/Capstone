import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
// import classes from './SignIn.css';
import Footer from '../Footer/Footer';
import './SignIn.css';

//! This logic is outside of the React class component believe I'll need to put it in every page...
const API_URL = getHostURL();
const AUTH_URL = `${API_URL}/api/users/login`;

function getHostURL() {
  if(window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:8000';
  } else {
    return 'Need to put heroku deployed address once I deploy it';
  }
}
console.log(AUTH_URL);



class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        // console.log(API_URL);
    }



    
    addUser = (event) => {
      event.preventDefault();
      const userData = {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      const request = new Request(AUTH_URL, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          opt: {
            credentials: 'same-origin'
          },
        }),
        body: JSON.stringify(userData)
      });
      fetch(request)
        .then((res) => {
          res.json()
            .then((userData) => {
              console.log('[SignIn.js] userData: ', userData);
            });
        });
      // window.location.reload();
      this.setState({
        email: '',
        password: ''
      });
    }
                              



    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    

    render() {
    return(
        <div>
          <NavBar />
            <div className="sign-in-card container">
              <form ref="login">
                <h2 className="sign-in">sign In</h2>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" ref="email" value={this.state.email} onChange={this.handleInputChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="username-email" name="email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" ref="password" value={this.state.password} onChange={this.handleInputChange}  className="form-control" id="InputPassword1" placeholder="Password" autoComplete="current-password" name="password"/>
                </div>
                <button type="submit"  onClick={this.addUser} className="btn btn-primary">Submit</button>
              </form>
            </div>
         <Footer />
        </div>
    );
  }
}

export default SignIn;