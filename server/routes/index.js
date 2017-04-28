const routes = require('express').Router();
const today = require('./today');

routes.get('/', (req, res) => { // <-- Will live on endpoint /api
    res.json({ message: 'Welcome to our api. The current endpoints are: api/images & api/bears' });
});

routes.use('/today', today); // <-- Will live on endpoint /api/today

module.exports = routes;
