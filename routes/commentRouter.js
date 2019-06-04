const express = require('express');
const { Comment } = require('../models');
const commentRouter = express.Router();


commentRouter.get('/comments', async (request, respond) => {
  try {
    const allComments = await Comment.findAll()
    respond.json(allComments)
  } catch (error) {
    respond.json({ msg: error.status })
  }
});

commentRouter.get('/comments/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const comment = await Comment.findByPk(id)
  
      if (!comment) throw Error('Post not found! EEEEEEKKK');
  
      response.json({
        comment
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
});

commentRouter.post('/comments', async (request, response) => {
    try {
      const comment = await Comment.create(request.body)
      response.json({
        comment
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
});

commentRouter.delete('/comments/:id', async (request, response) => {
    try {
      const deletion = await Comment.findByPk(request.params.id);
      await deletion.destroy();
      response.send(deletion);
    } catch (e) {
      console.log(e.message);
    }
});

commentRouter.put('/comments/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const comment = await Comment.findByPk(id);
      
      if (comment) await comment.update(request.body);
      response.json({
        comment
      });
    } catch(e) {
      response.json({
        message: e.message
      });
    }
});

module.exports = commentRouter;