/* eslint-disable no-undef */
import React, { Component } from 'react';
import { withScriptjs } from "react-google-maps";
import _ from 'lodash';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      markers: [],
    };
  }

  componentWillMount() {
    const refs = {}

    this.setState({
      markers: [],
      onSearchBoxMounted: ref => {
        refs.searchBox = ref;
      },
      onPlacesChanged: () => {
        const places = refs.searchBox.getPlaces();
        const bounds = new google.maps.LatLngBounds();

        places.forEach(place => {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        });
        const nextMarkers = places.map(place => ({
          position: place.geometry.location,
        }));
        const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

        this.setState({
          center: nextCenter,
          markers: nextMarkers,
        });
        // refs.map.fitBounds(bounds);
      },
    })
  }

  render () {
    return (
      <div className="search-form" data-standalone-searchbox="">
        <h2>What are you looking for?</h2>
        <StandaloneSearchBox
          containerElement={<div class="search-form" />}
          ref={this.props.onSearchBoxMounted}
          bounds={this.props.bounds}
          onPlacesChanged={this.props.onPlacesChanged}
        >
          <input
          type="text"
          className="form-control"
          placeholder="search for a place"
          />
        </StandaloneSearchBox>
      </div>
    );
  }
}

export default withScriptjs(SearchForm);
