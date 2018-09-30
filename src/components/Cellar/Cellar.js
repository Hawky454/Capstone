import React, { Component } from 'react';
import classes from './Cellar.css';


const imageStyle = {
    width: 150,
    height: 150,
    marginLeft: 44,
    borderRadius: 2
}


class Cellar extends Component{
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
        .then(data => this.setState({ cellarData: data }, () => console.log('cellar data fetched...:', data)));
    }

    
    render() {
    return(
        this.state.cellarData.map((data, index) => {
            return <div className={classes.Cellar} key={data.id}>
                     <div className={classes.container}>
                            <img 
                              src={data.image} 
                              alt ="pipe tobacco"
                              style={imageStyle}                          
                              />
                        <ul>
                            <li>{data.blend}</li>
                            <li>{data.brand}</li>
                            <li>{data.weight} lbs</li>
                            <li>{data.age} years</li>
                            <li>{data.purchased.slice(0,10)}</li>
                            <li>{data.available ? 'true' : 'false' }</li>
                            <li>{data.rating} out of 5 stars.</li>
                            <li>${data.price}</li>
                        </ul>
                      </div>         
                 </div>
             })
        );
     }
}

export default Cellar;