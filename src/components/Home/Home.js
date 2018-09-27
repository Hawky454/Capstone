import React from 'react';
import classes from './Home.css';

const Home = (props) => {
    
    return(
        <div className={classes.Home}>
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