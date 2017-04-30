const express = require('express');
const router = express.Router(); // get an instance of the express Router
const axios = require('axios');
// SL Platsuppslag
const stationApiKey = "e1a91d0e65ab4ffbbc3fbd7425677d8c";

var Station = require('../models/StationModel');


//////////////////////////////////////////
// INITIAL FETCH OF ALL STATIONS
//////////////////////////////////////////
router.route('/mystations').get((req,res) => {
 Station.find((err, stations) => {
   if (err) {
    res.send(err);
   } else {
    res.json({data: stations});
   }
  });
});
router.route('/')
///////////////////////////////////////////
// GET FOR THE SEARCH
///////////////////////////////////////////
.get((req, res) => {
     const stationQuery = req.query.query.replace(/\s/g, "%20")
     axios.get(` http://api.sl.se/api2/typeahead.json?key=${stationApiKey}&searchstring=${stationQuery}&stationsonly=true`)
     .then((response) => {
         res.json({data: response.data.ResponseData.filter((station) => station.Type === "Station")}) // <-- I only want the actual stations, not the adresses.
     }).catch((err) => {
         res.json(err)
     })
 })
///////////////////////////////////////////
// POST
///////////////////////////////////////////
.post((req,res) => {
 console.log(req.body," req.body");
 Station.insertMany(req.body).then(()=> {
  Station.find((err, stations) => {
    if (err) {
     res.send(err);
    } else {
     res.json({data: stations});
    }
   });
 }).catch((err) => {
  res.json(err);
 })




  // return new Promise((resolve, reject) => {
  //  const newStations = req.body;
  //  console.log(newStations," newStations i PROMISE");
  //  // SAVE NEW STATIONS
  //  newStations.map((newStation) => {
  //   var station = new Station();
  //   station.name = newStation.StationName;
  //   station.id = newStation.StationID;
  //   station.save((err) => {
  //    if(err) {
  //     console.log(err);
  //    } else {
  //     console.log("Success!");
  //    }
  //   })
  //  });
  // }).then(() => {
  //   return new Promise((resolve, reject) => {
  //    console.log("nu är det klart med sparningen!");
  //   })
  // })


  // const callBack = () => {

  // }
 // Station.find((err, stations) => {
 //   if (err) {
 //    res.send(err);
 //   } else {
 //    console.log("Det funkade!", stations);
 //    res.json({data: stations});
 //   }
 //  });

  // RETURN ALL STATIONS IN DATABASE AS JSON

})
///////////////////////////////////////////
// DELETE
///////////////////////////////////////////
router.route('/:station_id')
.delete((req, res) => {
 Station.remove({
     _id: req.params.station_id
 }, (err, station) => {
     if (err) {
      res.send(err);
     } else {
      res.json({ message: 'Successfully deleted' });
     }
 });
})

module.exports = router;
