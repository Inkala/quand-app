/* eslint-disable no-undef */
import React, { Component } from 'react';
import _ from 'lodash'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';

class GoogleMaps extends Component {

  state = {
    selectedPlace: undefined,
    bounds: null,
    center: {lat: 41.404082, lng: 2.175017},
    markers: []
  }

  onToggleOpen = (selectedPlace) => {
    this.setState({
      selectedPlace
    })
  }

  onMapMounted = ref => {
    this.map = ref;
  }

  onBoundsChanged = () => {
    this.setState({
      bounds: this.map.getBounds(),
      center: this.map.getCenter(),
    })
  }

  onSearchBoxMounted= ref => {
    this.searchBox = ref;
  }

  onPlacesChanged= () => {
    const places = this.searchBox.getPlaces();
    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
    });
    const nextMarkers = places;
    const nextCenter = _.get(nextMarkers, '0.geometry.location.position', this.state.center);

    this.setState({
      center: nextCenter,
      markers: nextMarkers,
    });
    // refs.map.fitBounds(bounds);
  }
  getPlaceInfo = place_id => {
    let service;
    if (this.map) {
      service = new google.maps.places.PlacesService(
        this.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      );
      service.getDetails(
        { placeId: place_id },
        (place, status) => {
          let placeHours;
          let placeUrl;
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.setState({
              markers: this.state.markers.map(marker => {
                if (marker.place_id === place.place_id) {
                  placeUrl = place.url;
                  if (place.opening_hours) {
                    placeHours = place.opening_hours.weekday_text;
                    return {
                      ...marker,
                      placeHours: placeHours,
                      placeUrl: placeUrl
                    }
                  } else {
                    return {
                      ...marker,
                      placeUrl: placeUrl
                    }
                  }
                } else {
                  return {
                    ...marker
                  }
                }
              })
            })
          }
        }
      );
    }
  }

  renderPlaceHours(marker) {
    if (!marker.placeHours) return null;
    return marker.placeHours.map(day => (
      <div className="dates">
        <span>{day}</span>
      </div>
    ))
  }
// ChIJoS7f0ZeipBIRkB69XxOceoo
// "https://maps.google.com/maps?ll=41.400447,2.156656&z=20&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=9978459531417296528"

  render () {
    return (
      <GoogleMap
        containerElement={<div class="map-view" />}
        ref={this.onMapMounted}
        defaultZoom={15}
        center={this.state.center}
        onBoundsChanged={this.onBoundsChanged}
      >
        <SearchBox
        containerElement={<div class="left-nav" />}
        ref={this.onSearchBoxMounted}
        bounds={this.state.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={this.onPlacesChanged}
        >
        <input
        type="text"
        placeholder="Search for a place"
        />
        </SearchBox>
        {
          this.state.markers.map((marker) => {
            let openHours = this.renderPlaceHours(marker)
            let image = {
              url:"",
              scaledSize: new google.maps.Size(25, 40)
            };
            if (openHours) {
              image.url = "http://www.clker.com/cliparts/W/g/y/b/9/B/map-pin-red-th.png";
            } else {
              image.url = "http://www.clker.com/cliparts/A/c/j/V/a/Q/google-map-pointer-grey-th.png";
            }
            return <Marker
              key={marker.place_id}
              position={marker.geometry.location}
              onClick={() => this.onToggleOpen(marker.place_id)}
              place={marker}
              placeInfo={this.getPlaceInfo(marker.place_id)}
              icon={image}
              animation={google.maps.Animation.DROP}
            >
              {this.state.selectedPlace === marker.place_id && <InfoWindow onCloseClick={() => this.onToggleOpen()}>
                <div className="marker">
                  <h1>{marker.name}</h1>
                  <p>{marker.formatted_address}</p>
                  {this.renderPlaceHours(marker)}
                  <a target="_blank" href={marker.placeUrl}>View in Google Maps</a>
                  <p><small>{marker.place_id}</small></p>
                </div>
              </InfoWindow>}
            </Marker>
          })
        }
      </GoogleMap>
    )
  }
}

const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }}/>,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(GoogleMaps)


export default MapContainer;
