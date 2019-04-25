import React, { Component } from 'react';
import './App.css';
import MapBox from './components/MapBox/MapBox';
import DropDown from './components/MapBox/DropDown';
import NavBar from './components/NavBar/NavBar.js';
// import BikeSharing from './components/BikeSharing/BikeSharing';

class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
        fData: [],
        name: '',
        company: '',
        city: '',
        country: 'DE',
        latitude: 0,
        longitude: 0,
    }
  }

  getFreeBikes = () => { 
    let BIKE_URL = 'https://api.citybik.es/v2/networks?fields=company,name,location/'; 
  fetch(BIKE_URL)
      .then(response => {
          //console.log("Fetch completeeee")
          return response.json()
      })
      .then( async data => {
  //    console.log(data.networks);
          await this.setState({
              data: data.networks,
              name: data.name,
              company: data.company,
              city: data.city,
              country: data.country,
              latitude: data.latitude,
              longitude: data.longitude
          })
          
      }).then(
        this.filterData()
      )
      
  };

  filterData = async () => { 
    const {data} = this.state
    if(data.length) {
    const fdata = data.filter( (elem) => {
      return elem.location.country === this.state.country
    })
    // console.log('this is filter data', fdata)

    await this.setState({
      fData: fdata,
      latitude: fdata[0].location.latitude,
      longitude: fdata[0].location.longitude,
    })
  }
  }
  componentDidMount = async () => {
    await this.getFreeBikes()
  }

  DropDownHandler = async (e, changeViewport) => {
    const value = e.target.value;
    await this.setState({
      country: value,
    })
    this.filterData();
    changeViewport({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
    });
  }

  render = () => {
    //console.log("this is fdata", this.state.fData);
    return (
    <div className="App">
        <NavBar />

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">One</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
    <div class="tile is-child box">
      <p class="title">By Country</p>
      <DropDown DropDownhandler={this.DropDownhandler} changeViewport={this.changeViewport}/><br></br>
      <p>Select a country from the dropdown list.</p>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">Map</p>
      <MapBox bikeshare={this.state.data} DropDownhandler={this.DropDownHandler} />
    </div>
    </div>
  </div>
</div>
    );
  }
}

export default App;
