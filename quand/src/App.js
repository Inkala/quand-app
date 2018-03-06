import React, { Component } from 'react';
import './App.css';

// import ResultsList from './components/results-list';
// import MapContainer from './components/map-container';
import MapContainer from './components/map-container';
import logo from './img/quand-logo.png';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="navbar top-nav">
            <img src={logo} alt="Quando logo" />
          </div>
        </div>
        <div className="map-container">
          <MapContainer
            // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE&v=3.exp&libraries=geometry,drawing,places"
            // loadingElement={<div style={{ height: `100%` }} />}
            // containerElement={<div className="col map-container" style={{ height: `100vh`}} />}
            // mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
