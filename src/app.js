const express = require('express');
const path = require('path');
const env = require('node-env-file');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '127.0.0.1');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

env('./.env');

if (process.env.NODE_ENV == 'development') app.use(morgan('dev'));

app.use(
  express.urlencoded({
    extended: true,
  })
);

const r_pomodoro = require('./routes/r_pomodoro');
const r_gtd = require('./routes/r_gtd');

app.use('/pomodoro', r_pomodoro());
app.use('/gtd', r_gtd());
app.get('/', (req, res)=> res.render('home'))

app.use((req, res) => {
  res.status(404);

  res.render('404', { url: req.url });

  return;
});

module.exports = app;