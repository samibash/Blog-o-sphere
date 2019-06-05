import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export default class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/posts'}>Posts</Link>
                    <Link to={'/upload'}>Upload</Link>
                </nav>
            </header>
        )
    }
}