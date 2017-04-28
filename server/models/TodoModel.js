var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    task: String,
    done: Boolean
});

module.exports = mongoose.model('TodoModel', TodoSchema);
