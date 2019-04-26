import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BikeSharePin from './BikeSharingPin.js';
import BikeShareInfo from './BikeShareInfo';
import DropDown from './DropDown';
import SearchForm from '../BackupFiles/SearchForm/SearchForm.js';


const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '50vw',
          height: '60vh',
          latitude: 40.7306,
          longitude: -73.968285,
          zoom: 7
        },
        popupInfo: null
      }
    
      this._renderMarker = this._renderMarker.bind(this);
      this._renderPopup = this._renderPopup.bind(this);
    };

    changeViewport = async (viewport) => {
      await this.setState(prevState => ({
        viewport: {
          ...prevState.viewport,
          latitude: viewport.latitude,
          longitude: viewport.longitude,
        },
      }))
      
    }

    _renderMarker(bike, i) {
      const lat = bike.location.latitude;
      const lng = bike.location.longitude;
      const key= `bike-${i}`;

      return (
    
        <Marker key={key} longitude={lng} latitude={lat} >
          <BikeSharePin size={20} onClick={() => this.setState({popupInfo: bike})} />
        </Marker>
      );
    }

    _renderPopup() {
      const {popupInfo} = this.state;
     
      if (popupInfo!== null) {
        const lat = popupInfo.location.latitude;
        const lng = popupInfo.location.longitude;
  
        return popupInfo && (
          <Popup tipSize={10}
            anchor="top"
            longitude={lng}
            latitude={lat}
            onClose={() => this.setState({popupInfo: null})} >
            <BikeShareInfo info={popupInfo} />
          </Popup>
        );
      }
      }
  
    render() {
    
      const { viewport } = this.state;
      const { bikeshare } = this.props;
       if (bikeshare) {
        return (
          <div class="tile is-ancestor">
            <div class="tile is-4 is-vertical is-parent">
              <div class="tile is-child box">
              <h4 class="title is-4">By Country </h4>
              <DropDown DropDownhandler={this.props.DropDownhandler} changeViewport={this.changeViewport}/><br></br>
                <p>Select a country from the dropdown list to view the bike sharing locations in the map.</p>
            </div>
            <div class="tile is-child box">
            <h4 class="title is-4">About CircumVelo </h4>
              <p>Biking while traveling abroad is more eco-friendly than taking a taxi.  This app lists bike sharing sites by country. Click on any of the pins on the map to see the bike sharing company name, city and country.</p>
              </div>
              </div>
            <div class="tile is-parent">
            <div class="tile is-child box">
            <h4 class="title is-4">Map</h4>
              <ReactMapGL
              {...viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
              mapboxApiAccessToken={mapboxglToken}
              mapStyle="mapbox://styles/shenae/cjuu1o9lf38bn1fqi1h93kulw">
              { bikeshare.map(this._renderMarker) }
              {this._renderPopup()}
              </ReactMapGL>
              </div>
            </div>
            </div>
           
        )
       } else {
         return null
       }
       

    }
  }
      
  export default MapBox;