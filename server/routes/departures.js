const express = require('express');
const router = express.Router(); // get an instance of the express Router
const axios = require('axios');
const mockdata = require('../mockdata/departures.js');
console.log(mockdata);
// SL Realtidsinformation 4
const realTimeApiKey = "152b19caf669418c88b48ce2c2ba0cee";

const stations = [
  {
    station: "ODENPLAN",
    siteid: "9117"
  }, {
    station: "KARLBERG",
    siteid: "9510"
  }, {
    station: "VAlHALLAVÄGEN/ODENGATAN",
    siteid: "1082"
  }, {
    station: "SPÅNGA",
    siteid: "9704"
  }
]
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
}

const cleanDepartures = (departures) => {
 return departures.map((departure) => {
   const stationData = departure.ResponseData;
   stationData.StopAreaName = appendStationName(stationData)
   for (var key in stationData) {
     ////////////////////////////////////////////////
     // ONLY DISPLAY THE 8 MOST UPCOMING DEPARTURES
     ////////////////////////////////////////////////
     if(Array.isArray(stationData[key]) && stationData[key].length > 8) {
       stationData[key].splice(8,stationData[key].length)
     }
   }
   return stationData;
 });
}


router.route('/').get((req, res) => {
  // REAL
  // let promiseArray = stations.map((station) => axios.get(`http://api.sl.se/api2/realtimedeparturesv4.json?key=${realTimeApiKey}&siteid=${station.siteid}&timewindow=30`))
  // axios.all(promiseArray).then(function(results) {
  //   let temp = results.map(response => response.data);
  //   res.json({data: cleanDepartures(temp)})
  // }).catch((err) => {
  //   res.json(err)
  // });
  // MOCK
  res.json({data: mockdata()})
})

module.exports = router;
