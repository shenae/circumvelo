import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BikeSharePin from './BikeSharingPin.js';
import BikeShareInfo from './BikeShareInfo';
import DropDown from './DropDown';
import './MapBox.css';


// https://api.citybik.es/v2/networks?fields=company,name,location

const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '50vw',
          height: '60vh',
          latitude: 52.520008,
          longitude: 13.404954,
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
            <div class="tile is-2 is-vertical is-parent">
            <p class="title-4">By Country</p>
              <DropDown DropDownhandler={this.props.DropDownhandler} changeViewport={this.changeViewport}/><br></br>
            <p>Select a country from the dropdown list.</p>
            </div>
            <div class="tile is-parent">
            <div class="tile is-child box">
            <p class="title-4">Map</p>
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