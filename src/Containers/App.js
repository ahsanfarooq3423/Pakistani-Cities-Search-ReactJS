import React, { Component } from 'react';
import Title from '../Components/Title';
import Search from '../Components/Search';
import Cities from '../Components/Cities';
import styles from './App.module.css';
var json = require('../pk.json');


class App extends Component {
  state = {
    cities: json,
    city: '',
  } 

  getCityItem = (event) => {
    let city = event.target.value;
    this.setState({city: city}); 
  }


  render() {
    return (
      <div className={styles.App}>
        <Title/>
        <Search getItem={this.getCityItem}/>
        <Cities cities ={this.state.cities}
        city = {this.state.city} />
      </div>
    );
  }
}

export default App;
