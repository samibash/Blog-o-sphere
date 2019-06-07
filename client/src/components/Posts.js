import React, {Component} from 'react';
import axios from 'axios';
import './Posts.css';

export default class Posts extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            title1: '',
            genre1: '',
            content1: '',
            created: false,
            clicked: false
        }
    }

// Delete Function

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


// Update Function

    onPostFormChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }



    handleSubmitUpdate = async (key) => {
        console.log(`Post Updated:`, this.state)
        const newPost = {
            "title1": this.state.title1,
            "genre1": this.state.genre1,
            "content1": this.state.content1
        }

        axios.put(`http://localhost:3001/posts/${key}`, newPost)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(key)
    }

    handleSubmitRedirect = async () => {
        await this.setState ({
            clicked: true
        })
    }

    componentDidMount(){
        this.props.upload()
    }

    render() {


        let allPosts = this.props.allposts.map(post => {
            const key=post.id
            console.log(key)

            if (this.state.clicked) {
                return (
                  <div>
                    <div id="upload">
                        <form onSubmit={this.handleSubmitUpdate(key)}>
                            <div className="field">
                                <label htmlFor="name">Title:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text"
                                        placeholder="Title"
                                        name="title1"
                                        value={
                                            this.state.title1
                                        }
                                        onChange={this.onPostFormChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="name">Genre:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text"
                                        placeholder="Genre"                              
                                        name="genre1"
                                        value={
                                            this.state.genre1
                                        }
                                        onChange={this.onPostFormChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="name">Content:</label>
                                <div className="control">
                                    <textarea 
                                        className="input"
                                        type="text"
                                        placeholder="Content" 
                                        name="content1"
                                        value={
                                            this.state.content1
                                        }
                                        onChange={this.onPostFormChange}
                                        rows="15">
                                    </textarea>
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" type="submit">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                )
              } else {
            return (
                <article class="message is-info">
                    <div class="message-header">
                        <h2>Title: <strong>{post.title}</strong></h2>
                        <h5>Genre: <strong><em>{post.genre}</em></strong></h5>
                        <button class="delete" aria-label="delete" onClick={()=>{this.handleSubmit(key)}}></button>
                    </div>
                    <div class="message-body">
                        <p>{post.content}</p>
                    </div>

                    <article className="media">
                        <div className="media-content">
                            <div className="field">
                                <p className="control">
                                    <textarea className="textarea" placeholder="Add a comment..." defaultValue={""} />
                                </p>
                            </div>
                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <a href="http://localhost:3000/posts" className="button is-info">Submit</a>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <div className="level-item">
                                        <button className="button is-info" onClick={()=>{this.handleSubmitRedirect(key)}}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </article>
                </article>
            )
            }
        })
        return (
            <div className="posts">
                {allPosts}
            </div>
        );
    }
}