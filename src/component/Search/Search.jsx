import React, { Component } from 'react';
import styles from './Search.css';

class Search extends Component {
  render() {
    return (
      <div className={styles["Search"]}>
        <h2>Search Your Route</h2>
        <p>Starting Address</p>
        <input onChange={this.props.updateAddress}/>
        <p>Ending Address</p>
        <input onChange={this.props.updateDestination}/>
        <p>Date</p>
        <input type='date' onChange={this.props.updateDay}/>
        <button onClick={this.props.doSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
