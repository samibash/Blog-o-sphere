const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000

// Routes
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const commentRouter = require('./routes/commentRouter');



// Middleware
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/destinations', destinationRouter);
app.use('/', userRouter);
app.use('/', postRouter);
app.use('/', commentRouter);



//   Server
app.listen(PORT, () => console.log(`Destination app listening on port ${PORT}!`))