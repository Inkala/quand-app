import React, { Component } from 'react';

import './App.css';
import SearchForm from './components/search-form';
// import ResultsList from './components/results-list';
import MapContainer from './components/map-container';
import logo from './img/quando-logo.png';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="navbar top-nav">
            <img src={logo} alt="Quando logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 left-nav">
            <SearchForm/>
          </div>
          <div className="col-md-9 map-view">
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <SearchForm />
// <ResultsList />
// <script async defer
// AIzaSyAGaBSySyhmv8w1TXxgQO9hx6ZgOPWZsZE
