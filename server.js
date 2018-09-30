const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const todos = require('./routes/todos');

// Setting up view engine
app.set('views', path.join(__dirname, 'views'));
