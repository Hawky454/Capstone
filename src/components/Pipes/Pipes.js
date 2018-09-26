import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './Pipes.css';



class Pipes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
    return(
        <div>
            <NavBar />
            <div className={classes.Pipes}>
              <button>One</button>
              <button>And a</button>
              <button>Two</button>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Pipes;