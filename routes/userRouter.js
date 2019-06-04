const express = require('express');
const { User } = require('../models');
const userRouter = express.Router();


userRouter.get('/users', async (request, respond) => {
  try {
    const allUsers = await User.findAll()
    respond.json(allUsers)
  } catch (error) {
    respond.json({ msg: error.status })
  }
});

userRouter.get('/users/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const user = await User.findByPk(id)
  
      if (!user) throw Error('Post not found! EEEEEEKKK');
  
      response.json({
        user
      })
    } catch (e) {
      response.status(500).json({ msg: e.message })
    }
});

module.exports = userRouter;