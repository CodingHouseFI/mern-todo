// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/todoapp';

// PACKAGE REQUIRES
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const path = require('path')

// DB CONNECT
require('mongoose').connect(MONGO_URI, err => {
  if(err) throw err;
  console.log(`MongoDB connected to ${MONGO_URI}`);
});

// APP DECLARATION
const app = express();


// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
  res.send('working\n');
})

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
