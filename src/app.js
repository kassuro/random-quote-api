const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');

// init knex config
const knex = Knex(knexConfig.development);
// init objection
Model.knex(knex);

const indexRouter = require('./routes/index');
const quotesRouter = require('./routes/quotes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);

module.exports = app;
