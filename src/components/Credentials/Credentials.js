import React from 'react';
// import './Credentials.css';
import NavBar from '../NavBar/NavBar';

const Credentials = (props) => {
    return(
        <div>
          <NavBar />
        
          <div className="credentials-container">
            <section className="login">
                <button>Log In</button>
            </section>
            <section className="signup">
                <button>Sign up</button>
            </section>
          </div>
        </div>
    );
}

export default Credentials;