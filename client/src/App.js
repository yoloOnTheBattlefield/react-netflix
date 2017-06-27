import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './containers/navigation/Navbar';
import Landing from './containers/pages/Landing/Landing';
import Browse from './containers/pages/Browse/Browse';
import SignIn from './containers/pages/SignIn/SignIn';
import NotFound from './containers/pages/NotFound/NotFound';
import Movie from './containers/pages/Movie/Movie';

class App extends Component {
  fetchApi = () => {
    fetch('api/')
      .then(data => console.log(data.json()))
  }

  componentDidMount(){
    this.fetchApi();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/movie/:id' component={Movie} />
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
