import React, { Component, Fragment } from 'react';
import Header from './components/header'

import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Fragment >
        <div className='firstHeader'>
          <p><b>Uwe</b></p>
        </div>
        <Header />
        <main style={{ display: 'flex' }}>
          <Sidebar />
          <Main />
        </main>
      </Fragment>
    );
  }
}

export default App;
