var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/micro-service');
 
var cursoSchema = new mongoose.Schema({
    name: String
}, { collection: 'cursos' }
);
 
module.exports = { Mongoose: mongoose, CursoSchema: cursoSchema }