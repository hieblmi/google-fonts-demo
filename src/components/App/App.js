import React, { Component } from 'react';
import Header from '../Header/Header.js'
import Controller from '../Controller/Controller.js'
import View from '../View/View.js'

import styles from './App.css';

const colorSchemas = require('../../data/colorSchemas').default;


class App extends Component {


  render() {
    console.log(colorSchemas.combos[1]);
    return (
      <div style={colorSchemas.combos[3]} className={styles.app}>
        <Header />
        <Controller />
        <View /> 
      </div>
    );
  }
}

export default App;
