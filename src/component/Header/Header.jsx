import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles["Header"]}>
        <div className={styles["logo"]}>
        <h1>GreenTaxi</h1>
        <img src="https://cdn4.iconfinder.com/data/icons/dot/256/taxi_passanger.png" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
