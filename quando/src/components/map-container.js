import React, { Component } from 'react';
// import {Map, GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  render() {
      const style = {
        width: '100vw',
        height: '100vh'
      }
      return (
        <div style={style}>
          <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
          </Map>
        </div>
      )
    }
    // <div><h1>{this.state.selectedPlace.name}</h1></div>
   // console.log("Test!!!");
  // render() {
  //   return (
  //   );
  // }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE'
  // libraries: ['visualization']
})(MapContainer)




//
// loadMap() {
//  if (this.props && this.props.google) {
//    const {google} = this.props;
//    map = new google.maps.Map(document.getElementById('map'), {
//      center: {lat: 40.7413542, lng: -73.9980244},
//      zoom: 13
//    });
//  }
// }
