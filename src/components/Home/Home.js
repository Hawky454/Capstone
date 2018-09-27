import React from 'react';
import classes from './Home.css';

const Home = (props) => {
    
    return(
        <div className={classes.Home}>
          <h1>Fucking focus on the server and not the style! <hr/> Today, Thursday, 9-27-18</h1>
          <div className={classes.image}>
            <div className={classes.container}>
              <section className={classes.card1}>
                 <p>Keep track of your entire collection!</p>
              </section>
              <section className={classes.card2}>
              </section>
            </div>
          </div>
        </div>
    );
}

export default Home;