const debug        = require('debug')('ffln:server');
const http         = require('http');

const express      = require('express');

const bodyParser   = require('body-parser');
const chalk        = require('chalk');
const cookieParser = require('cookie-parser');
const favicon      = require('favicon');
const logger       = require('morgan');
const path         = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes/api'));
app.all('/', (req, res, next) => {
  res.send('dist/index');
});

app.use((req, res, next) => { // FIXME: Remove this after React Router is implemented
  "use strict";
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)){
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + port;
    debug('Listening on ' + bind);
    console.log(chalk.blue.bold(`Listening at ${chalk.green.underline(`http://localhost:${port}`)}`));
}
