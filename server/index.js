const app = require('express')();
const http = require('http').Server(app);
const port = 5000;
const io   = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const events = require('events');

mongoose.connect('mongodb://localhost/todo_list');

//////////////////////////////////////////
// SOCKET API
//////////////////////////////////////////
const socket = require("./socket");
require('./socket')(io);


//////////////////////////////////////////
// REGULAR API
//////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const router = require('./routes/'); // get an instance of the express Router



app.use('/api', router);

http.listen(port, () => {
  console.log(`Lyssnar på port ${port}`);
});
