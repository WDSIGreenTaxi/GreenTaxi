import React, { Component } from 'react';
import styles from './Search.css';

const Search = props => {
  return (
    <div className={styles["Search"]}>
      <h2>Search Your Route</h2>
      <p>Starting Address</p>
      <input onChange={props.updateAddress}/>
      <p>Ending Address</p>
      <input onChange={props.updateDestination}/>
      <p>Date</p>
      <select className="month-drop-down" onChange={props.updateMonth}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select className="day-drop-down" onChange={props.updateDay}>
        <option value="0">Monday</option>
        <option value="1">Tuesday</option>
        <option value="2">Wednesday</option>
        <option value="3">Thursday</option>
        <option value="4">Friday</option>
        <option value="5">Saturday</option>
        <option value="6">Sunday</option>
      </select>
      <button onClick={props.doSearch}>Search</button>
    </div>
  );
}

export default Search;
