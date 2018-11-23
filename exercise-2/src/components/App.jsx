import React, { Component } from 'react';
import Title from './Title';

class App extends React.Component {
  render() {
    return React.createElement('div', { className: 'app' }, Title);
  }
}

export default App;