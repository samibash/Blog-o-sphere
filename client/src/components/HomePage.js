import React, {Component} from 'react'
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div>             
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="content">
                            <img className="img" src="https://i.imgur.com/mRPKozg.png" alt ="logo"/>
                        </div>
                    </article>
                </div>

                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title"><em>“I want to have a platform where my written thoughts on an important issue can have an audience of people who’ll react and comment on them. I think it’s important to further dialogue on such important issues.”</em></p>
                        <p class="subtitle"> - Anonymous User</p>
                        <div class="content">
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}