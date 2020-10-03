import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import './Index.scss';

//
const mapStyles = {
  width: '100%',
  height: '100%',
};

const defaultMapOptions = {

};

export class Index extends Component<any> {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          // zoom={15}
          style={mapStyles}
          // options={defaultMapOptions}
          // disableDefaultUI={true}
          initialCenter={{ lat: -26.922465, lng: -49.0589332 }}
        />
        <div className="container-btn">
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB5F1N8dsGPsBIz6fVGsEyyCRFmYY4i85o'
})(Index);
