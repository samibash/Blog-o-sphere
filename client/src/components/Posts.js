import React, {Component} from 'react';
import axios from 'axios';
// import UpdatePostPage from './UpdatePostPage';
// import {Redirect} from 'react-router-dom';
import './Posts.css'

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

    handleSubmitUpdate = (key) => {
        axios.put(`http://localhost:3001/posts/${key}`)
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

        // if(this.state.updated === true) {
        //     return <Redirect to="/posts" />
        // }

        let allPosts = this.props.allposts.map(post => {
            const key=post.id
            console.log(key)
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
                    <button onClick={()=>{this.handleSubmitUpdate(key)}}>UPDATE</button>
                    {/* <button>UPDATE</button> */}
                </article>
            )
        })
        return (
            <div className="posts">
                {allPosts}
            </div>
        );
    }
}

// Comment stuff


// <article class="media">
//   <figure class="media-left">
//     <p class="image is-64x64">
//       <img src="https://bulma.io/images/placeholders/128x128.png">
//     </p>
//   </figure>
//   <div class="media-content">
//     <div class="content">
//       <p>
//         <strong>Barbara Middleton</strong>
//         <br>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
//         <br>
//         <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
//       </p>
//     </div>

//     <article class="media">
//       <figure class="media-left">
//         <p class="image is-48x48">
//           <img src="https://bulma.io/images/placeholders/96x96.png">
//         </p>
//       </figure>
//       <div class="media-content">
//         <div class="content">
//           <p>
//             <strong>Sean Brown</strong>
//             <br>
//             Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
//             <br>
//             <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
//           </p>
//         </div>

//         <article class="media">
//           Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
//         </article>

//         <article class="media">
//           Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
//         </article>
//       </div>
//     </article>

//     <article class="media">
//       <figure class="media-left">
//         <p class="image is-48x48">
//           <img src="https://bulma.io/images/placeholders/96x96.png">
//         </p>
//       </figure>
//       <div class="media-content">
//         <div class="content">
//           <p>
//             <strong>Kayli Eunice </strong>
//             <br>
//             Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
//             <br>
//             <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
//           </p>
//         </div>
//       </div>
//     </article>
//   </div>
// </article>
// <article class="media">
//   <figure class="media-left">
//     <p class="image is-64x64">
//       <img src="https://bulma.io/images/placeholders/128x128.png">
//     </p>
//   </figure>
//   <div class="media-content">
//     <div class="field">
//       <p class="control">
//         <textarea class="textarea" placeholder="Add a comment..."></textarea>
//       </p>
//     </div>
//     <div class="field">
//       <p class="control">
//         <button class="button">Post comment</button>
//       </p>
//     </div>
//   </div>
// </article>