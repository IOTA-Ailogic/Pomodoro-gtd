const express = require('express');
const router = express.Router();

const pomdoro = require('./controller/c_pomodoro');

module.exports = () => {

  router.get('/', pomdoro.main)
  router.post('/start', pomdoro.start);
  

  return router;
};

