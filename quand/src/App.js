import React, { Component } from 'react';
import './App.css';

// import ResultsList from './components/results-list';
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
        <MapContainer
        
        />
      </div>
    );
  }
}

export default App;
