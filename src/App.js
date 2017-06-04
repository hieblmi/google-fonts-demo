import React, { Component } from 'react';

import styles from './main.css';

const logo = require('./logo.svg');


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h2>Welcome to React<span role="img" aria-label="jsx-a11y/accessible-emoji">😀</span></h2>
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
