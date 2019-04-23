import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 

 mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const map = new mapboxgl.Map({
container: 'mapbox',
style: 'mapbox://styles/mapbox/streets-v11'
});

class MapBox extends Component {
    
    state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
      
    render() {
    
       const { viewport } = this.state;
       
      return (
        <ReactMapGL
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      );
    }
  }
      
  export default MapBox;