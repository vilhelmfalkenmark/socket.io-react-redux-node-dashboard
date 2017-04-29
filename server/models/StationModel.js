var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StationSchema = new Schema({
    Name: String,
    SiteId: String
});

module.exports = mongoose.model('StationModel', StationModel);
