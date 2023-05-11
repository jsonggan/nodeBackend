require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const routes = require('./server/routes/movieRoutes.js');
app.use('/', routes);

app.listen(port, ()=> console.log(`listening on port ${port}`));


