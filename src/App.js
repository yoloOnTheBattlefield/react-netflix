import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './containers/navigation/Navbar';
import Landing from './containers/pages/Landing/Landing';
import Browse from './containers/pages/Browse/Browse';
import SignIn from './containers/pages/SignIn/SignIn';
import NotFound from './containers/pages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/browse' component={Browse} />
              <Route path='/signin' component={SignIn} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
