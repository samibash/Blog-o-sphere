import React, {Component} from 'react';
import axios from 'axios';
import UpdatePostPage from './UpdatePostPage';
import {Redirect} from 'react-router-dom';

export default class Posts extends Component {
  

    handleSubmit = (key) => {
    //    event.preventDefault();
        // const key=this.post.id
        axios.delete(`http://localhost:3001/posts/${key}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(key)
    }

    // handleSubmitUpdate = (key) => {
    //     axios.put(`http://localhost:3001/posts/${key}`)
    //         .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    //     console.log(key)
    // }

    componentDidMount(){
        this.props.upload()
    }

    render() {

        // if(this.state.updated === true) {
        //     return <Redirect to="/posts" />
        // }

        let allPosts = this.props.allposts.map(post => {
            const key=post.id
            console.log(key)
            return (
                <div>
                    <h2><strong>Title</strong>:{post.title}</h2>
                    <h5><strong>Genre</strong>: <em>{post.genre}</em></h5>
                    <p>{post.content}</p>
                        <button onClick={()=>{this.handleSubmit(key)}}>DELETE</button>
                        {/* <button onClick={()=>{this.handleSubmitUpdate(key)}}>UPDATE</button> */}
                        <button>UPDATE</button>
                </div>
            )
        })
        
        return (
            <div className="posts">
                <h1>All Posts</h1>
                {allPosts}
            </div>
        );
    }
}