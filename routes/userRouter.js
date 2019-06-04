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

module.exports = userRouter;