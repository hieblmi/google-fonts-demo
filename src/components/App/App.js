import React, { Component } from 'react';
import Header from '../Header/Header.js'
import Controller from '../Controller/Controller.js'
import View from '../View/View.js'
import styles from './App.css';

import {Col, Row, Grid} from 'react-bootstrap';
const colorSchemas = require('../../data/colorSchemas').default;


class App extends Component {

  render() {
    return (
      <div style={colorSchemas.combos[3]} className={styles.app}>
      <Header />
      <Controller />
      <Grid>
      <Row>
      <Col xs={1} md={1} style={{border: '1px green solid'}}>asdf</Col>
      <Col xs={1} md={1} style={{border: '1px black solid'}}>fdsa</Col>
      <Col xs={1} md={1} style={{border: '1px blue solid'}}>asdf</Col>
      </Row>
      </Grid>
      <View /> 
      </div>
      );
  }
}

export default App;
