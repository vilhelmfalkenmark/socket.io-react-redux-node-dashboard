const routes = require('express').Router();
const today = require('./today');
const departures = require('./departures');
const stations = require('./stations');

routes.get('/', (req, res) => { // <-- Will live on endpoint /api
    res.json({ message: 'Välkommen till dashboard apiet följande endpoints finns: api/today, api/stations & api/departures' });
});

routes.use('/today', today); // <-- Will live on endpoint /api/today
routes.use('/departures', departures); // <-- Will live on endpoint /api/today
routes.use('/stations', stations); // <-- Will live on endpoint /api/today

module.exports = routes;
