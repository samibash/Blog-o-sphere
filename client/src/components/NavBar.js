import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


export default class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar-start" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <img className="logo" src="https://i.imgur.com/mRPKozg.png" alt="blog-o-logo"/>                        
                        <a href="http://localhost:3000" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to={'/'}>Home</Link>
                            <Link className="navbar-item" to={'/posts'}>Posts</Link>
                            <Link className="navbar-item" to={'/upload'}>Upload</Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

