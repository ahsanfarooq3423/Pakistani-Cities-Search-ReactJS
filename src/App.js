import React, { Component } from 'react';
import Title from './Components/Title';
import Search from './Components/Search';

import styles from './App.module.css';

var json = require('./pk.json');
console.log(json[0].city);

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
        <div className={styles.cities}>
            <ul>
            {this.state.cities.map(object => {
                if (object.city.toUpperCase().indexOf(this.state.city.toUpperCase()) >= 0){
                  return <li>{object.city.charAt(0).toUpperCase() + object.city.slice(1)}</li>
                } 
              })
              }
             
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
