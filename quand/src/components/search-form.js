import React, { Component } from 'react';


class SearchForm extends Component {

  state = {
    newSearch: "",
    markers: []
  }

  handleSearch = (term) => this.setState({
      newSearch: term.target.value
  });

  componentDidMount(){
    this.searchBox = new this.props.google.maps.places.SearchBox(this.refs.search);
    this.searchBox.addListener('places_changed', () => {
      var places = this.searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      this.props.onPlaceSelected(places[0]);

      // markers.forEach(marker => {
      //   marker.setMap(null);
      // });
      // markers = [];
      //
      // markers.push(new window.google.maps.Marker({
      //   map: map,
      //   title: place.name,
      //   position: place.geometry.location
      // }));
    });
  }


  render() {
    return (
      <div className="search-form">
        <h2>What are you looking for?</h2>
        <input
          type="text"
          className="form-control"
          placeholder="search for a place"
          onChange={this.handleSearch}
          value={this.state.newSearch}
          ref="search"
        />
        <button className="btn btn-info" onClick={this.createEvent}>Search</button>
        <hr/>
        <span>Options <i className="fas fa-sort-down drop-down"></i></span>
      </div>
    )
  }
}

export default SearchForm;

// <span>Time <i class="fas fa-sort-down"></i></span>
