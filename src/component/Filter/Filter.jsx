import React, { Component } from 'react';
import styles from './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles["filter"]}>
        <h2>Select Month</h2>
        <select className="month-drop-down">
          <option value="">January</option>
          <option value="">February</option>
          <option value="">March</option>
          <option value="">April</option>
          <option value="">May</option>
          <option value="">June</option>
          <option value="">July</option>
          <option value="">August</option>
          <option value="">September</option>
          <option value="">October</option>
          <option value="">November</option>
          <option value="">December</option>
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
