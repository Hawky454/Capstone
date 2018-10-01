import React, { Component } from 'react';
import classes from './Cellar.css';
import { Link } from 'react-router-dom';



class Cellar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellarData: []
        }
    }

    //! Still very much playing around with this component... think maybe this call should be done when a button is clicked or something of that nature... idears
    componentWillMount() {
        fetch('api/cellar/')
            .then(res => res.json())
            .then(data => this.setState({
                    cellarData: data
                },
                () => console.log('cellar data fetched...:', data)));
    }

    
    render() {
    return(
        this.state.cellarData.map((data, index) => {
            return <div className={classes.Cellar} key={data.id}>
                     <div className={classes.container}>
                            <img 
                              className={classes.cellarImage}
                              src={data.image} 
                              alt ={data.blend}                         
                              />
                        <ul>
                            <li>Blend: {data.blend}</li>
                            <li>Brand: {data.brand}</li>
                            <li>Weight: {data.weight} lbs</li>
                            <li>Age: {data.age} years</li>
                            <li>Purchased: {data.purchased.slice(0,10)}</li>
                            <li>Available: {data.available ? 'true' : 'false (frowny face)' }</li>
                            <li>Price: ${data.price}</li>
                            <li>Source: {data.source}</li>
                            <li>Rating: {data.rating} out of 5 stars.</li>
                        </ul>
                        <div className={classes.btnContainer}>
                            <Link to="/CellarAddForm"><button>add</button></Link>
                            <button>delete</button>
                            <button>Compare</button> 
                            {/* //! will want a fetch call to ebay here */}
                        </div>
                      </div>         
                 </div>
             })
        );
     }
}

export default Cellar;