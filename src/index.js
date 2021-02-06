const app = require('./app');

const server = app.listen(app.get('port'), app.get('host'), () =>
  console.log(`Listening on port: ${app.get('port')}`)
);
