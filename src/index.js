const express = require('express');
const path = require('path');
const env = require('node-env-file');

const app = express();

app.set('port', process.env.PORT || 3000);
//app.set('host', process.env.HOST || '127.0.0.1');
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

const router = require('./routes');

app.use('/', router())

app.use((req, res) => {
  res.status(404);

  res.render('404', { url: req.url });

  return;
});



const server = app.listen(app.get('port'), ()=> console.log(app.get('port')))//, app.get('host'))
