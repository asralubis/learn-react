import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css';


class App extends Component {
  render() {
    return (
      // <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/about`} component={About} />
          </Switch>

        </Router>


      </div>
    );
  }
}

export default App;
