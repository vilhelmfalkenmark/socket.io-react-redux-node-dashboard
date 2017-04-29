var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StationSchema = new Schema({
    StationName: String,
    StationID: String
});

module.exports = mongoose.model('StationModel', StationModel);
