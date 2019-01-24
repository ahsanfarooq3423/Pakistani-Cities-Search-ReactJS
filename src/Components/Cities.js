import React from 'react';
import styles from '../Containers/App.module.css';

const Cities = (props) => {
    
    return <div className={styles.cities}>
            <ul>
                {props.cities.map(object => {
                    if (object.city.toUpperCase().indexOf(props.city.toUpperCase()) >= 0){
                    return <li>{object.city.charAt(0).toUpperCase() + object.city.slice(1)}</li>
                    } 
                })
                }
            </ul>
        </div>
}

export default Cities;