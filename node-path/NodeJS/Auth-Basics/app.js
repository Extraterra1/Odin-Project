const express = require('express');
const path = require('path');
const session = require('express-session');
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(session({ secret: 'liandrys anguish', resave: false, saveUninitialized: true }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'Incorrect username' });
      if (user.password !== password) return done(null, false, { message: 'Incorrect password' });
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { user: req.user, err: req.query.err });
});

app.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/?err'
  })
);

app.get('/signUp', (req, res) => {
  res.render('signUp');
});

app.post(
  '/signUp',
  asyncHandler(async (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.pass
    });
    const result = await user.save();
    res.redirect('/');
  })
);

app.get('/logOut', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
