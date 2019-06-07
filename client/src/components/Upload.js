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
                <div id="upload">
                    <form onSubmit={this.onPostFormSubmit}>
                        <div className="field">
                            <label htmlFor="name">Title:</label>
                            <div className="control">
                                <input 
                                    className="input"
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    value={
                                        this.state.title
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
                                    name="genre"
                                    value={
                                        this.state.genre
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
                                    name="content"
                                    value={
                                        this.state.content
                                    }
                                    onChange={this.onPostFormChange}
                                    rows="15">
                                </textarea>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}