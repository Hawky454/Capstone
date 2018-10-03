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
    componentDidMount() {
        fetch('api/cellar/')
            .then(res => res.json())
            .then(data => this.setState({
                    cellarData: data
                },
                () => console.log('cellar data fetched...:', data)));
    }

    removeCellarEntry = (id) => {
        let response = prompt('ARE YOU SURE YOU WANT TO PERFORM THIS ACTION? Type Y or N');
        if(response === 'n' || response === 'N') {
            return
        } else {
        console.log('this is the delete button plust the array of cellarData:', this);
        let cellarData = this.state.cellarData;
        let tobacco = cellarData.find((cellarEntry) => {
            return cellarEntry.id === id;
        });
        console.log(tobacco);
        let request = new Request('api/cellar/' + id, {
            method: 'DELETE',
        });
        fetch(request)
          .then((res) => {
              res.json()
                .then((data) => {
                    console.log(data)
                });
            
          });
        };
    };

    
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
                            <li>Available: {data.available ? 'Yes' : 'Nope (frowny face)' }</li>
                            <li>Price: ${data.price}</li>
                            <li>Source: {data.source}</li>
                            <li>Rating: {data.rating} out of 5 stars.</li>
                        </ul>
                        <div className={classes.btnContainer}>
                            <Link to="/CellarAddForm"><button>add</button></Link>
                            <button onClick={this.removeCellarEntry.bind(this, data.id)} >delete</button>
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