import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BikeSharePin from './BikeSharingPin.js';
import BikeShareInfo from './BikeShareInfo';
import DropDown from './DropDown';
import './MapBox.css';

//change mapboxgl-popup attributes
//<i class="fas fa-bicycle"></i> bike icon
//add images in popup from api if possible
// https://api.citybik.es/v2/networks?fields=company,name,location

const mapboxglToken = process.env.REACT_APP_MAPBOX;

class MapBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewport: {
          width: '60vw',
          height: '80vh',
          latitude: 52.520008,
          longitude: 13.404954,
          zoom: 8
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
        //console.log(`popupInfo in state`,popupInfo);
  
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
      // console.log(this.props);
       if (bikeshare) {
        return (
          <div>

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">One</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
    <div class="tile is-child box">
      <p class="title">By Country</p>
      <DropDown DropDownhandler={this.props.DropDownhandler} changeViewport={this.changeViewport}/><br></br>
      <p>Select a country from the dropdown list.</p>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">Map</p>
      <MapBox bikeshare={this.state.data} DropDownhandler={this.DropDownHandler} />
    
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

          </div>
           
        )
       } else {
         return null
       }
       

    }
  }
      
  export default MapBox;