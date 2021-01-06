/*global chrome*/

import React, { Component } from 'react';
import Router, { Link, goBack } from 'route-lite';
import logo from './affirm-logo.svg';
import './App.css';

const Page = ({ text }) => {
  return (
    <div>
      <p onClick={() => goBack()}>{text}</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {this.props.isExt ? 
              <img src={chrome.runtime.getURL("static/media/affirm-logo.svg")} className="App-logo" alt="logo" />
            :
              <img src={logo} className="App-logo" alt="logo" />
            }
  
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Link component={Page} componentProps={{text: 'help'}}>Go to Page</Link>
      </Router>
    );
  }
}

export default App;
