const express = require('express');
const router = express.Router();
const axios = require('axios');
const mockdata = require('../mockdata/departures.js');
// SL Realtidsinformation 4
const realTimeApiKey = "152b19caf669418c88b48ce2c2ba0cee";



const appendStationName = (stationData) => {
  for (var key in stationData) {
    if(Array.isArray(stationData[key]) && stationData[key].length > 0) {
      for (var i = 0; i < stationData[key].length; i++) {
       if(stationData[key][i].hasOwnProperty("StopAreaName")) {
        return stationData[key][i].StopAreaName;
       }
      }
    }
  }
  return "Stationsnamnet ej hittat";
};

const cleanDepartures = (departures) => {
 return departures.map((departure) => {
   const stationData = departure.ResponseData;
   stationData.StopAreaName = appendStationName(stationData);
   return stationData;
 });
};


router.route('/').get((req, res) => {
 //********* REAL *********//

 const Station = require('../models/StationModel');

 let myStations = [];
 Station.find((err, stations) => {
    if (err) {
     res.send(err);
    } else {
      myStations = stations;
    }
   }).then((resolve, reject) => {
    let promiseArray = myStations.map((station) => axios.get(`http://api.sl.se/api2/realtimedeparturesv4.json?key=${realTimeApiKey}&siteid=${station.id}&timewindow=30`))
    axios.all(promiseArray).then(function(results) {
      let temp = results.map(response => response.data);
      res.json({data: cleanDepartures(temp)})
    }).catch((err) => {
      res.json(err)
    });
   })

 //********* MOCK *********//
  // res.json({data: mockdata()})
});

module.exports = router;
