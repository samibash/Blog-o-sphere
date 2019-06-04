const express = require('express');
const { Post } = require('../models');
const postRouter = express.Router();


postRouter.get('/posts', async (request, respond) => {
  try {
    const allPosts = await Post.findAll()
    respond.json(allPosts)
  } catch (error) {
    respond.json({ msg: error.status })
  }
});

postRouter.get('/posts/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const post = await Post.findByPk(id)
  
      if (!post) throw Error('Post not found! EEEEEEKKK');
  
      response.json({
        post
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
  });

postRouter.post('/posts', async (request, response) => {
    try {
      const post = await Post.create(request.body)
      response.json({
        post
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
  });

  

module.exports = postRouter;