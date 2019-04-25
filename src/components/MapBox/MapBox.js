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
      //console.log('this is viewport',this.state.viewport)
    }

    _renderMarker(bike, i) {
    //  console.log({bike})
      const lat = bike.location.latitude;
      const lng = bike.location.longitude;
      // console.log(lat, lng);
      
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
      console.log("Mapbox props.DropDownhandler: " + this.props.DropDownhandler);
      console.log("Mapbox bikeshare: " + bikeshare);
       if (bikeshare) {
        return (
          <div>
          <ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={mapboxglToken}
            mapStyle="mapbox://styles/shenae/cjuu1o9lf38bn1fqi1h93kulw">
            { bikeshare.map(this._renderMarker) }
            {this._renderPopup()}
          </ReactMapGL>
          </div>
           
        )
       } else {
         return null
       }
       

    }
  }
      
  export default MapBox;