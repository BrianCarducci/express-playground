var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mongodb = require('mongodb');
var expressMongoDb = require('express-mongo-db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

mongodb://USERNAME:PASSWORD@myShard-shard-00-00-lbofd.mongodb.net:27017,myShard-shard-00-01-lbofd.mongodb.net:27017,myShard-shard-00-02-lbofd.mongodb.net:27017/MYDBNAME?ssl=true&replicaSet=myShard-shard-0&authSource=admin

//app.use(expressMongoDb('mongodb+srv://user1:CoffeeBoi22@myfirstcluster-vbjxo.mongodb.net/school?retryWrites=truel'));
//app.use(expressMongoDb('mongodb://user1:CoffeeBoi22@myShard-shard-00-00-lbofd.mongodb.net:27017,myShard-shard-00-01-lbofd.mongodb.net:27017,myShard-shard-00-02-lbofd.mongodb.net:27017/school?ssl=true&replicaSet=myShard-shard-0&authSource=admin'));
// app.use(expressMongoDb('mongodb://localhost:27017/school'));
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Setting up auto-increment id
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/school';

// MongoClient.connect(url, (err, client) => {
//     if (err) {
//       console.log('Unable to connect to client, ', err);
//     } else {
//       var db = client.db('school');
//       db.collection('students').countDocuments((err, result) => {
//         //app.records = result;
//         console.log(app.records);
//       });
//     }
//   });

// MongoClient.connect(url, (err, client) => {
//   if (err) {
//     console.error(err);
//   } else {
//     var db = client.db('school');
//     db.collection('students').find().limit(1).sort({$natural:-1}).toArray((err, result) => {
//       if (result === []) {
//         app.records = 0;
//       } else {
//         app.records = result[0]._id;
//       }
//     });
//   }
// });

module.exports = app;
