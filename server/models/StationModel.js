var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StationSchema = new Schema({
    name: String,
    id: String
});

module.exports = mongoose.model('Station', StationSchema);
