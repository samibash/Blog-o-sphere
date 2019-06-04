const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const app = express();

// Routes
// const destinationRouter = require('./routes/destinationRouter');
const userRouter = require('./routes/userRouter');
// const hotelRouter = require('./routes/hotelRouter');
// const reviewRouter = require('./routes/reviewRouter');

const PORT = process.env.PORT || 3000

// Middleware

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/destinations', destinationRouter);
app.use('/', userRouter);
// app.use('/', hotelRouter);
// app.use('/', reviewRouter);

//   server below

app.listen(PORT, () => console.log(`Destination app listening on port ${PORT}!`))