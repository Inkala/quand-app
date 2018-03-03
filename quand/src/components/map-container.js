import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import SearchForm from './search-form';

class MapContainer extends Component {

  state = {
    selectedPlace: undefined
  }

  onPlaceSelected = (place) => {
    console.log(place);
    this.setState({
      selectedPlace: place
    })
  }

  renderSelectePlace() {
    return this.state.selectedPlace
      ? <Marker onClick={this.onMarkerClick} name={'Current location'}
        position={{
          lat:this.state.selectedPlace.geometry.location.lat(),
          lng:this.state.selectedPlace.geometry.location.lng()
        }}
       />
      : null
  }

  render() {
    const style = {
      width: '100%',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div className="row">
        <div className="col-md-4 left-nav">
          <SearchForm
            google={this.props.google}
            onPlaceSelected={this.onPlaceSelected}
          />
        </div>
        <div className="col-md-8 map-view">
          <Map
            google={this.props.google}
            style={style}
            initialCenter={{
              lat: 41.399017,
              lng: 2.166240
            }}
            zoom={14}
            onReady={this.fetchPlaces}
            onClick={this.onMapClicked}
          >
            {this.renderSelectePlace()}
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
          </Map>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE',
  libraries: ['places']
})(MapContainer)
