import React, { Component } from 'react';
import styles from '../App.module.css';

class Search extends Component {
    
    render (props) {
        return (
            <div className={styles.Search}>
                <h1>Search for the Pakistan Cities:</h1>
                <input onChange={this.props.getItem} type='text' placeholder='Search Cities with React'></input>
            </div>
            
        )
    }
} 

export default Search;