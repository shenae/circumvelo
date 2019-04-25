import React, { Component } from 'react';

class BikeShareInfo extends Component {
  render() {
    const { info } = this.props;
    const city = `${info.location.city}`;
    const country = `${info.location.country}`;
    const name = `${info.name}`;

    return (
        <div>
            <div>Name: {name}</div>
            <div>City: {city}</div>
            <div>Country: {country}</div>
        </div>
    )
    }
}

export default BikeShareInfo