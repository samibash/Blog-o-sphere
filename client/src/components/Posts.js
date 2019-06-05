import React, {Component} from 'react'
// import './HomePage.css'

class Posts extends Component {
    render() {
        let allPosts = this.props.allposts.map(post => {
            return (
                <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                </div>
        )
        
        })
        
    return (
      <div className="posts">
        <h1>Posts page</h1>
        {allPosts}
      </div>
    );
    }
}

export default Posts