import React, { Component } from 'react';

import Navbar from './containers/navigation/Navbar';
import Landing from './containers/pages/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
