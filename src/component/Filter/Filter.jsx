import React, { Component } from 'react';
import styles from './Filter.css';

const Filter = props => {
  return (
    <div className={styles["filter"]}>
      <h2>Select Month</h2>
      <div className={styles['drop-down']}>
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
          <option value="11">December</option>
        </select>
        <select className="day-drop-down" onChange={props.updateDay}>
          <option value="0">Sunday</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
        </select>
      </div>
      <button onClick={props.doFilter}>Submit</button>
    </div>
  );
}

export default Filter;
