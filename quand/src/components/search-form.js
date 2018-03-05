// import React, { Component } from 'react';
// import { compose, with props, lifecycle } from 'recompose';
// import { withScriptjs } from 'react-google-maps';
// import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
//

// const SearchForm = compose(
//   withProps({
//
//   })
// )
//
//   state = {
//     newSearch: "",
//     markers: []
//   }
//
//   handleSearch = (term) => this.setState({
//       newSearch: term.target.value
//   }, () => this.searchBox.textSearch({query: this.state.newSearch}, (res, stat) => {
//     // console.log('here', stat)
//     if (stat === this.props.google.maps.places.PlacesServiceStatus.OK) {
//       // console.log(res)
//       this.props.onPlaceSelected(res);
//     }
//   }));
//
//   componentWillReceiveProps(nextProps) {
//     // this.searchBox.setBounds(nextProps.bounds);
//   }
//
//   componentDidMount(){
//     this.searchBox = new this.props.google.maps.places.PlacesService(this.props.map);
//     // console.log(this.searchBox)
//     // this.searchBox.addListener('places_changed', () => {
//     //   var places = this.searchBox.getPlaces();
//     //   if (places.length == 0) {
//     //     return;
//     //   }
//     //textSearch
//     //   this.props.onPlaceSelected(places);
//     //
//     //   // markers.forEach(marker => {
//     //   //   marker.setMap(null);
//     //   // });
//     //   // markers = [];
//     //   //
//     //   // markers.push(new window.google.maps.Marker({
//     //   //   map: map,
//     //   //   title: place.name,
//     //   //   position: place.geometry.location
//     //   // }));
//     // });
//   }
//
//
//   render() {
//     return (
//       <div className="search-form">
//         <h2>What are you looking for?</h2>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="search for a place"
//           onChange={this.handleSearch}
//           value={this.state.newSearch}
//           ref="search"
//         />
//         <button className="btn btn-info" onClick={this.createEvent}>Search</button>
//         <hr/>
//         <span>Options <i className="fas fa-sort-down drop-down"></i></span>
//       </div>
//     )
//   }
// }
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE',
//   libraries: ['places']
// })(SearchForm)
//
// // <span>Time <i class="fas fa-sort-down"></i></span>
