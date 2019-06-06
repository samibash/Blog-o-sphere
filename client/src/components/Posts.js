import React, {Component} from 'react';
import axios from 'axios';

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

    componentDidMount(){
        this.props.upload()
    }

    render() {
        let allPosts = this.props.allposts.map(post => {
            const key=post.id
            console.log(key)
            return (
                <div>
                    <h2><strong>Title</strong>:{post.title}</h2>
                    <h5><strong>Genre</strong>: <em>{post.genre}</em></h5>
                    <p>{post.content}</p>
                        <button onClick={()=>{this.handleSubmit(key)}}>DELETE</button>
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