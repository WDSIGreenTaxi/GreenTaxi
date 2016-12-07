import React, { Component } from 'react';
import styles from './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles["filter"]}>
        <h2>Select Month</h2>
        <select className="month-drop-down">
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
          <option value="11">December</option>
        </select>
        <select className="day-drop-down">
          <option value="1">Sunday</option>
          <option value="2">Monday</option>
          <option value="3">Tuesday</option>
          <option value="4">Wednesday</option>
          <option value="5">Thursday</option>
          <option value="6">Friday</option>
          <option value="7">Saturday</option>
        </select>
        <select className="day-drop-down">
          <option value="">Sunday</option>
          <option value="">Monday</option>
          <option value="">Tuesday</option>
          <option value="">Wednesday</option>
          <option value="">Thursday</option>
          <option value="">Friday</option>
          <option value="">Saturday</option>
        </select>
      </div>
    );
  }
}

export default Filter;
