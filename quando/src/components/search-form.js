import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    newSearch: ""
  }

  render() {
    return (
      <div className="search-form">
        <h2>What are you looking for?</h2>
        <input type="text" className="form-control" placeholder="search for a place"/>
        <button className="btn btn-info" onClick={this.createEvent}>Search</button>
        <hr/>
        <span>Options <i class="fas fa-sort-down drop-down"></i></span>
      </div>
    )
  }
}

export default SearchForm;

// <span>Time <i class="fas fa-sort-down"></i></span>
