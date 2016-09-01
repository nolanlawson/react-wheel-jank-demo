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
setInterval(() => wait(1000), 2000)

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
        <h3>Version 3</h3>
        <p className="App-intro">
          In this version, we have an <code>onwheel</code> event attached directly to the DOM node
          of the inner scrollable div.
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
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.scrollableDiv).onwheel = noop
  }
}

export default App;
