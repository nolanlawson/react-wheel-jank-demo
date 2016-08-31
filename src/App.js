import React, { Component } from 'react';
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
setInterval(() => wait(1000), 2000)

var scrollableDivStyle = {
  width: 300,
  height: 200,
  overflowY: 'auto',
  margin: '0 auto'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // remove this onWheel to fix janky scrolling!
        <div style={scrollableDivStyle} /* onWheel={noop} */>
          <h2>I am scrollable!</h2>
          <ul>
            {(times(50, i => (<li>List item #{i + 1}</li>)))}
          </ul>
        </div>
        <ul>
          {(times(50, i => (<li>List item #{i + 1}</li>)))}
        </ul>
      </div>
    );
  }
}

export default App;
