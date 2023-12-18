const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').LocalStrategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));

const User = mongoose.model(
  'User',
  new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  })
);

const app = express();
app.set('views', __dirname);
app.set('view engine', 'pug');
