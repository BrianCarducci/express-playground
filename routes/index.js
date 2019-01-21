var express = require('express');
var router = express.Router();
// var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get all students
router.get('/students', (req, res) => {
  // req.db.collection('students').find({}).toArray((err, result) => {
  //   if (err) console.log('error occurred', err);
  //   res.send(result);
  // });

  res.send('my name jeff');
});

//Get a student by id
router.get('/students/:id', (req, res) => {
  // req.db.collection('students').findOne( { _id: req.params.id }, (err, result) => {
  //   res.send(result);
  // });
});

//Insert a student
router.post('/students', (req, res, next) => {
  // req.body._id = req.app.records + 1;
  // req.db.collection('students').insert(req.body, (err, records) => {
  //   if (err) next(err);
  //   else req.app.records++;
  // });
  // req.db.collection('students').find({}).limit(1).sort( { $natural: -1 } ).toArray((err, result) => {
  //   if (err) next(err);
  //   res.send({
  //     message: 'insertion successful', 
  //     payload: result
  //   });
  // });
});

//Delete a student by id
router.delete('/students/:id', (req, res) => {
  // req.db.collection('students').remove( { _id: req.params.id } );
});

//Update a student by id
router.put('/students:id', (req, res) => {

});

module.exports = router;
