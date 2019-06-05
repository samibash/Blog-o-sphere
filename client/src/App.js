import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/' exact component={ componentName }/>
            <Route path='/create-restaurant' component={ CreateRestaurantPage }/>
          </Switch>
        </div>
      </div>
    );
  }
}