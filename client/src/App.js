import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Upload from './components/Upload';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          <Switch>
            <Route path='/' exact component={ HomePage }/>
            <Route path='/posts' exact component={ Posts }/>
            <Route path='/upload' exact component={ Upload }/>
          </Switch>
        </div>
      </div>
    );
  }
}