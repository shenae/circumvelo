import React, { Component } from 'react';
import './App.css';
import MapBox from './components/MapBox/MapBox';
import DropDown from './components/MapBox/DropDown';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer';


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
        return response.json()
        })
        .then( async data => {
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
  
    return (
    <div className="App">
        <NavBar />
        <MapBox bikeshare={this.state.data} DropDownhandler={this.DropDownHandler} />
    </div>
   
    );
  }
}

export default App;
