import React, {Component} from 'react'
// import './HomePage.css'

export default class Posts extends Component {

    componentDidMount(){
        this.props.upload()
    }

    render() {
        let allPosts = this.props.allposts.map(post => {
            return (
                <div>
                    <h2>{post.title}</h2>
                    <h5><strong>Genre</strong>: <em>{post.genre}</em></h5>
                    <p>{post.content}</p>
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