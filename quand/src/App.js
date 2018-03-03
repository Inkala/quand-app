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
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-5 left-nav">
            {/*<SearchForm/>*/}
          </div>
          <div className="col-lg-9 col-md-8 col-sm-7 map-view">
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
