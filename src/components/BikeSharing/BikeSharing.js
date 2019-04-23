import React, { Component } from 'react';
import './BikeSharing.css';
 

class BikeSharing extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
          name: '',
          company: '',
          city: '',
          country: '',
          free_bikes: 0
          
        }
      }
getFreeBikes () { 
  let bike_URL = 'http://api.citybik.es/v2/networks'; 
fetch(bike_URL)
    .then(response => response.json())
    .then(data => {
    //   console.log(data.networks);
        this.setState({
            data: data.networks
            // name: data.name,
            // company: data.company,
            // city: data.city,
            // country: data.country,
            // free_bikes: data.free_bikes
        })
    })
};
componentDidMount () {
  this.getFreeBikes()
}

    render () {

        const bikeDataArray = this.state.data.map(bike => {
            return (
                <div key={bike.id}>
                    <h1>{bike.name}</h1>
                    <h3>{bike.company}</h3>
                    <h3>{bike.location.city}</h3>
                    <h3>{bike.location.country}</h3>
                </div>
                
            )
        })
        return (
            <div>
                {bikeDataArray}
            </div>
        )
    }



}

export default BikeSharing;