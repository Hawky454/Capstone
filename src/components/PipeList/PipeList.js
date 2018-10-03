import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './PipeList.css';



// const imageStyle = {
//     width: 250,
//     height: 200,
//     marginLeft: 44,
//     borderRadius: 2
// }



class PipeList extends Component {
    constructor (props) {
        super(props);
        this.state= {
            pipeData: []
        }
    }

    

    componentDidMount() {
        fetch('api/pipes/')
            .then(res => res.json())
            .then(data => this.setState({
                    pipeData: data
                },
                () => console.log('pipes data fetched...:', data)));
    }

    removePipeEntry = (id) => {
        let response = prompt('ARE YOU SURE YOU WANT TO PERFORM THIS ACTION? Type Y or N');
        if(response === 'n' || response === 'N') {
            return
        } else {
        console.log('this is the delete button plus the array of pipeData:', this);
        let pipeData = this.state.pipeData;
        let pipe = pipeData.find((pipeEntry) => {
            return pipeEntry.id === id;
        });
        console.log(pipe);
        let request = new Request('api/pipes/' + id, {
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
        return ( 
            this.state.pipeData.map((data, index) => {
                return <div className={classes.PipeList} key={data.id}>
                         <div className={classes.container}>
                                <img 
                                  className={classes.pipesImage}
                                  src={data.image} 
                                  alt ={data.blend}
                                //   style={imageStyle}                          
                                  />
                            <ul>
                                <li>Brand: {data.brand}</li>
                                <li>Maker: {data.pipeMaker}</li>
                                <li>Year: {data.year}</li>
                                <li>Price: ${data.price}</li>
                                <li>Smooth: {data.smooth ? 'Yes' : 'Nope'}</li>
                                <li>Sandblasted: {data.sandblasted ? 'Yes' : 'Nope' }</li>
                                <li>Source: {data.source}</li>
                                <li>Rating: {data.rating} out of 5 stars.</li>
                            </ul>
                            <div className={classes.btnContainer}>
                                <Link to="/PipesAddForm"><button>add</button></Link>
                                <button onClick={this.removePipeEntry.bind(this, data.id)}>delete</button>
                                <button>Compare</button> 
                                {/* //! will want a fetch call to ebay here */}
                            </div>
                          </div>         
                     </div>
            })
         );
    }
}
 
export default PipeList;