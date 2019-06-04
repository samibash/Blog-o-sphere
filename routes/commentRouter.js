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

module.exports = commentRouter;