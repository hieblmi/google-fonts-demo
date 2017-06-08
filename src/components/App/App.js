import React, { Component } from 'react';
import Header from '../Header/Header.js'
import Controller from '../Controller/Controller.js'
import View from '../View/View.js'
import styles from './App.css';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.css'

let {Col, Row, Grid} = require('react-bootstrap');
const colorSchemas = require('../../data/colorSchemas').default;


class App extends Component {

  render() {

    let container = `${bootstrap.container}`;
    let rowStyle = `${bootstrap.row}`;
    let controllerStyle = `${bootstrap['col-xs-6']}`;
    let viewStyle = `${bootstrap['col-xs-6']}`;

    return (
      <div style={colorSchemas.combos[4]} className={styles.app}>
      <Header />
      <div className={container} style={{height:'80vh'}}>
        <div className={rowStyle}>
            <div className={controllerStyle}>
              <Controller />
            </div>  
            <div className={viewStyle}>
              <View />
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
