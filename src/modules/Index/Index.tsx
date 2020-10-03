import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';

import './Index.scss';

const stylers = [
  { "stylers": [{ "hue": "#3d535b" }, { "saturation": -20 }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#3d535b" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "##e8eeef" }] },
  { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#e8eeef" }] },
  { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#b1bcbf" }] },
  { "featureType": "water", "stylers": [{ "color": "#adb9bc" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d535b" }] },
  { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#d1d9db" }] },
  { "featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }] },
  { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#bfc9cc" }, { "visibility": "on" }] },
  { "featureType": "poi.business", "elementType": "geometry", "stylers": [{ "color": "#cdd6d8" }, { "visibility": "on" }] },
  { "featureType": "poi.school", "elementType": "geometry", "stylers": [{ "color": "#cdd6d8" }, { "visibility": "on" }] },
  { "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "color": "#cdd6d8" }, { "visibility": "on" }] },
  { "featureType": "poi.government", "elementType": "geometry", "stylers": [{ "color": "#cdd6d8" }, { "visibility": "on" }] },
  { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dee5e8" }] }
];

const mapStyles = {
  width: '100%',
  height: '100%',
  featureType: 'landscape.man_made',
  elementType: 'geometry.fill',
  styles: stylers
};

export class Index extends Component<any> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }


  /*
  _mapLoaded(mapProps: any, map: any) {
    map.setOptions({
      styles: this.mapStyles
    })
  }
  */

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          // options={defaultMapOptions}
          // disableDefaultUI={true}
          initialCenter={{ lat: -26.922465, lng: -49.0589332 }}
        // onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
        </Map>
        <div className="action-container">
          <Link className="container-btn" to="/places">
            <button className="btn btn-primary">
              Selecione da lista
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(Index);
