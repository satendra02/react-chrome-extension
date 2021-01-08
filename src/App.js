/*global chrome*/

import React, { Component } from 'react';
import Router, { Link, goBack } from 'route-lite';
import logo from './affirm-logo.svg';
import './App.css';
import {AffirmMerchantMetaData, isAffirmMerchant} from "./helper";

const Page = ({ text }) => {
  return (
    <div>
      <p onClick={() => goBack()}>{text}</p>
    </div>
  )
}

class AffirmMerchantPromo extends Component {
    render() {
      var meta_data = AffirmMerchantMetaData();
      this.props.name = meta_data.name;
      this.props.icon_url = meta_data.icon_url;
      this.props.zero_apr = meta_data.zero_apr;
      this.props.image_url = meta_data.image_url;

      return (
          <div className="merchant-card-holder">
              <h3> Merchant Card</h3>
              <div className="merchant-card-image" style={{
                  backgroundImage: `url("${this.props.image_url}")`
              }}/>
              <div className="merchant-card">
                  <img className="merchant-logo" src={this.props.icon_url} />
                  <div>
                      <div className="merchant-card-row merchant-card-name">{this.props.name}</div>
                      <div className="merchant-card-row">
                          {this.props.zero_apr ? 'As low as 0% APR' : 'Browse Deals today!'}
                      </div>
                  </div>
              </div>
          </div>
      )
    }
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
          <AffirmMerchantPromo/>
      </Router>
    );
  }
}

export default App;
