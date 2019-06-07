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
            id: null,
            created: false,
            clicked: false
        }
    }

// Delete Function

    handleDelete = async () => {
    //    event.preventDefault();
        // const key=this.post.id
       await axios.delete(`http://localhost:3001/posts/${this.state.id}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }


// Update Function

    onPostFormChange = async (event) => {
        const name = event.target.name
        const value = event.target.value
       await this.setState({ [name]: value })
    }



    handleSubmitUpdate = async (e) => {
        e.preventDefault();
        const newPost = {
            "title": this.state.title1,
            "genre": this.state.genre1,
            "content": e.target.content1
        }
            let newKey = Number(this.state.id)
        await axios.put(`http://localhost:3001/posts/${newKey}`, newPost)
            .then(res => {
            console.log(res.data.post);
        })
    }

    handleSubmitRedirect = async (key) => {
        await this.setState ({
            id: key,
            clicked: true
        })
    }

    componentDidMount(){
    }

    render() {


        let allPosts = this.props.allposts.map(post => {

            if (this.state.clicked) {
                return (
                  <div>
                    <div id="upload">
                        <form>
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
                                    <button className="button is-link" type="submit"onClick={this.handleSubmitUpdate}>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                )
              } else {
                  const key = post.id
            return (
                <article class="message is-info">
                    <div class="message-header">
                        <h2>Title: <strong>{post.title}</strong></h2>
                        <h5>Genre: <strong><em>{post.genre}</em></strong></h5>
                        <button class="delete" aria-label="delete" onClick={()=>{this.handleDelete(this.state.id)}}></button>
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