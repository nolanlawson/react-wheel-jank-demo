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

function doSuspiciousPreventDefault (e) {
  if (1 === 0) { // will never happen
    e.preventDefault();
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Wheel Jank Demo</h2>
        </div>
        <h3>Version 4</h3>
        <p className="App-intro">
          In this version, we have a React <code>onTouchStart</code> event on the scrollable div,
          which contains a supicious <code>e.preventDefault()</code> (wrapped in an <code>if (false) {}</code>, but enough
          to spook the browser).
        </p>
        <div style={scrollableDivStyle} ref="scrollableDiv" onTouchStart={doSuspiciousPreventDefault}>
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
    //ReactDOM.findDOMNode(this.refs.scrollableDiv).ontouchstart = doSuspiciousPreventDefault
  }
}

export default App;
