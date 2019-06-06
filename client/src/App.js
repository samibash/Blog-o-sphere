import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Upload from './components/Upload';

import { fetchAllPosts } from './services/Posts';



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myposts: [],
      allposts: [],
      upload: []
    }
    this.fetchPostData=this.fetchPostData.bind(this)
  }

  fetchPostData = async ()=>{
    const allposts =  await fetchAllPosts()
    this.setState({
      allposts: allposts
    })
    console.log(allposts)
    }

  componentDidMount(){
    this.fetchPostData()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar />
          <Switch>
            <Route path='/' exact component={ HomePage }/>
            <Route exact path='/posts' render={()=> <Posts  allposts={this.state.allposts} upload={this.fetchPostData}/>} />
            <Route path='/upload' exact component={ Upload } upload={this.fetchPostData}/>
          </Switch>
        </div>
      </div>
    );
  }
}