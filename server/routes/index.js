const routes = require('express').Router();
const today = require('./today');
const departures = require('./departures');
const stations = require('./stations');
const weather = require('./weather');

routes.get('/', (req, res) => { // <-- Will live on endpoint /api
    res.json({ message: 'Välkommen till dashboard apiet följande endpoints finns: api/today, api/stations & api/departures' });
});

routes.use('/today', today);
routes.use('/departures', departures);
routes.use('/stations', stations);
routes.use('/weather', weather);

module.exports = routes;
