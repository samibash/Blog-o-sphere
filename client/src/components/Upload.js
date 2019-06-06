import React, {Component} from 'react'
import { Redirect } from 'react-router';
import axios from 'axios';

export default class Upload extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
                title: '',
                genre: '',
                content: '',
                created: false
        }
    }

    onPostFormChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    onPostFormSubmit = async (e) => {
        e.preventDefault()
        console.log(`Post Submitted:`, this.state)
        const newPost = {
            "title": this.state.title,
            "genre": this.state.genre,
            "content": this.state.content,
        }

        axios.post("http://localhost:3001/posts", newPost)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        console.log(this.state)

        this.setState({
            created: true
        })
    }

    render() {
        if (this.state.created === true) {
            return <Redirect to="/posts" />
          }
        return (
            <div>
                <h1>This is the Upload page</h1>
                <div id="upload">
                    <form onSubmit={this.onPostFormSubmit}>
                        <div>              
                            <label htmlFor="name">Title:</label>
                            <input 
                                name="title"
                                value={
                                    this.state.title
                                }
                                onChange={this.onPostFormChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Genre:</label>
                            <input 
                                name="genre"
                                value={
                                    this.state.genre
                                }
                                onChange={this.onPostFormChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Content:</label>
                            <input
                                name="content"
                                value={
                                    this.state.content
                                }
                                onChange={this.onPostFormChange}
                            />
                        </div>
                        <button type="submit">Add Post</button>
                    </form>
                </div>
            </div>
        )
    }
}


