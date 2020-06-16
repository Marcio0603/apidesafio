var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET all cursos. */
router.get('/cursos', function (req, res, next) {
    var db = require('../db');
    var Curso = db.Mongoose.model('customers', db.CursoSchema, 'cursos');
    Curso.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});

module.exports = router;
