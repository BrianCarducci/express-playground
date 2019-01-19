var express = require('express');
var router = express.Router();
// var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students', (req, res, next) => {

  //Get all students
  req.db.collection('students').find({}).toArray((err, result) => {
    if (err) console.log('error occurred', err);
    res.send(result);
  });

});

//Get a student by id
router.get('/students/:doo', (req, res) => {
  res.send(req.params.doo);
});

  // var MongoClient = mongodb.MongoClient;
  // var url = 'mongodb://localhost:27017/school';
  // MongoClient.connect(url, (err, client) => {
  //   if (err) {
  //     console.log('Unable to connect to client, ', err);
  //   } else {
  //     console.log('Connected!');
  //     var db = client.db('school');
  //     var collection = db.collection('students');
  //     collection.find({}).toArray((err, result) => {
  //       if (err) {
  //         res.send(err);
  //       } else if (result) {
  //         res.render('studentlist', {
  //           "studentList" : result
  //         });
  //       }
  //     });
  //   }
  // });
  // res.render('studentlist', {
  //   "studentList" : app.
  // });


router.post('/students', (req, res, next) => {
  req.body._id = req.app.records + 1;
  req.db.collection('students').insert(req.body, (err, records) => {
    if (err) next(err);
    else req.app.records++;
  });
  req.db.collection('students').find({}).limit(1).sort({$natural:-1}).toArray((err, result) => {
    if (err) next(err);
    res.send({
      message: 'insertion successful',
      payload: result
    });
  });
});

router.delete('/students/:name', (req, res) => {
  req.db.collection('students').deleteMany({name: req.params.name});
});

router.put('/students:id', (req, res) => {

});

module.exports = router;
