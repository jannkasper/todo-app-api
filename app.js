// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;


require('dotenv').config();

const PORT = process.env.PORT || 5432;
const express = require('express');
const cool = require('cool-ascii-faces');
const path = require('path');
const bodyParser = require('body-parser');
const filter = require('./app/routes/filter.js');


const app = express();

// Request parses
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//User route
// app.use(app.router);
// filter.initialize(app);
// app.use('/', filter);


// app.get('/', (req, res) => {
//   res.send('Hi!')
// });

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.send('Hi!'))
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`App running on port ${ PORT }`));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}`)
// });
