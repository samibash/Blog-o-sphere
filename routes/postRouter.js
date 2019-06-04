const express = require('express');
const { Post } = require('../models');
const postRouter = express.Router();


postRouter.get('/posts', async (request, response) => {
  try {
    const allPosts = await Post.findAll()
    response.json(allPosts)
  } catch (error) {
    response.json({ msg: error.status })
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

postRouter.delete('/posts/:id', async (request, response) => {
    try {
      const deletion = await Post.findByPk(request.params.id);
      await deletion.destroy();
      response.send(deletion);
    } catch (e) {
      console.log(e.message);
    }
});

postRouter.put('/posts/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const post = await Post.findByPk(id);
      
      if (post) await post.update(request.body);
      response.json({
        post
      });
    } catch(e) {
      response.json({
        message: e.message
      });
    }
});



module.exports = postRouter;