//import express
const express = require('express');
// import mangoose
const mongoose = require('mongoose');
// import the feed routes
const Router = require('./routes/Finanzas');
// create the express app
const app = express();
// to parse incoming json
app.use(express.json());


// setup a database connection using mongoose
// past the connection string given from your atlas server
const url = `mongodb+srv://jdcubero:jdcubero@business.tyo7k2d.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect( url
  )
  .then(() => {
	  console.log('Connected to database')
  })
  .catch(err => console.log('err', err))

app.use(Router);

app.listen(8080);
