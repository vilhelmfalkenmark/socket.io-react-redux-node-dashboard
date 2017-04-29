const express = require('express');
const router = express.Router(); // get an instance of the express Router
const axios = require('axios');
// SL Platsuppslag
const stationApiKey = "e1a91d0e65ab4ffbbc3fbd7425677d8c";

router.route('/')
 .get((req, res) => {
     const stationQuery = req.query.query.replace(/\s/g, "%20")
     axios.get(` http://api.sl.se/api2/typeahead.json?key=${stationApiKey}&searchstring=${stationQuery}&stationsonly=true`)
     .then((response) => {
         res.json({data: response.data.ResponseData.filter((station) => station.Type === "Station")}) // <-- I only want the actual stations, not the adresses.
     }).catch((err) => {
         res.json(err)
     })
 })
 .post((req,res) => {
  console.log(req.body," posten");



 })

module.exports = router;
