import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import Filter from './Filter/Filter.jsx';
import Graph from './Graph/Graph.jsx';
import Search from './Search/Search.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      historyData: [],
      predictResponse: [],
      origAddress: '',
      origLat: '',
      origLong: '',
      destAddress: '',
      destLat: '',
      destLong: '',
      distance: '',
      month: '',
      day: '',
    }
  }

//   componentWillMount(){
//     getHistory();
// }

  getPrediction(){
    fetch(`http://localhost:9000/api/prediction`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      origLat: this.state.origLat,
      origLong: this.state.origLong,
      destLat: this.state.destLat,
      destLong: this.state.destLong,
      distance: this.state.distance,
      month: this.state.month,
      day: this.state.day
    })
  })
  .then(r => r.json())
  .then((response) => {
    this.setState({
      predictResponse: response
    })
    next();
  })
}

  getHistory () {
    fetch(`http://localhost:4000/history`)
    .then(r => r.json())
    .then((response) => {
      this.setState({
        historyData: response
      })
    })
    .catch(err => console.log(err));
  }

  updateAddress (e) {
    this.setState({
      origAddress: e.target.value
    });
  }

  updateDestination (e) {
    this.setState({
      destAddress: e.target.value
    });
  }

  updateMonth (e) {
    this.setState({
      month: e.target.value
    });
  }

  updateDay (e) {
    this.setState({
      day: e.target.value
    });
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Header />
        <div className={styles["side-bar"]}>
          <Filter
            updateMonth={event => this.updateMonth(event)}
          />
          <Search
            updateAddress={event => this.updateAddress(event)}
            updateDestination={event => this.updateDestination(event)}
            updateDay={event => this.updateDay(event)}
          />
        </div>
        <div className={styles["graph-container"]}>
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;
