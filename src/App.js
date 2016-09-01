import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { times, noop } from 'lodash';

function wait(time) {
  var startTime = (new Date()).getTime();
  var endTime = startTime + time;
  while ((new Date()).getTime() < endTime) {
    // wait for it...
  }
}

// jank up the main thread!
setInterval(() => wait(3000), 4000)

var scrollableDivStyle = {
  width: 300,
  height: 200,
  overflowY: 'auto',
  margin: '0 auto',
  background: '#ededed'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Wheel Jank Demo</h2>
        </div>
        <h3>Version 1</h3>
        <p className="App-intro">
          In this version, we have no <code>wheel</code> events at all.
        </p>
        <div style={scrollableDivStyle} ref="scrollableDiv">
          <h2>I am scrollable!</h2>
          <ul>
            {(times(50, i => (<li key={i}>List item #{i + 1}</li>)))}
          </ul>
        </div>
        <ul>
          {(times(50, i => (<li key={i}>List item #{i + 1}</li>)))}
        </ul>
      </div>
    );
  }
}

export default App;
