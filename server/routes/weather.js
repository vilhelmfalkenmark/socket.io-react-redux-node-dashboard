const express = require('express');
const router = express.Router();
const axios = require('axios');
const mockdata = require('../mockdata/weather.js');
const momentTimezone = require('moment-timezone');
const moment = require('moment');
const weatherSymbols = [
 {
   value: 0,
   text: "Total mayhem"
 }, {
   value: 1,
   text: "Klar himmel"
 }, {
  value: 2,
  text: "Nästan helt klar himmel"
 }, {
  value: 3,
  text: "Växlande molnighet"
 }, {
  value: 4,
  text: "Halvklar himmel"
 }, {
  value: 5,
  text: "Molnigt"
 }, {
  value: 6,
  text: "Mulet"
 }, {
  value: 7,
  text: "Dimma"
 }, {
  value: 8,
  text: "Regnskurar"
 }, {
  value: 9,
  text: "Åska och storm"
 }, {
  value: 10,
  text: "Light sleet"
 }, {
  value: 11,
  text: "Snöfall"
 }, {
  value: 12,
  text: "Regn"
 }, {
  value: 13,
  text: "Åska"
 }, {
  value: 14,
  text: "Snöblandat regn"
 }, {
  value: 15,
  text: "Snöfall"
 }
]

const swedishDates = {
 days: ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],
 months: ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]
}

const tempIndex = 1;
const windDirectionIndex = 3;
const windSpeedIndex = 4;
const weatherSymbolIndex = 18;
const smhiApiURL = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.06/lat/59.03/data.json'

const timeFunction = (timeString) => {
let timeStamp = new Date(timeString);
  return {
   hour: timeStamp.getHours(),
   date: timeStamp.getDate(),
   day: swedishDates.days[timeStamp.getDay()],
   month: swedishDates.months[timeStamp.getMonth()]
  };
// let timeStamp = momentTimezone.tz(timeString, "Europe/Stockholm");
//   return {
//    hour: timeStamp.hour(),
//    date: timeStamp.date(),
//    day: swedishDates.days[timeStamp.day()],
//    month: swedishDates.months[timeStamp.month()]
//   };
}


router.route('/').get((req, res) => {
//********* REAL *********//
axios.get(smhiApiURL)
.then((response) => {
 // Filter so we only get the report for every 8th hour
 const cleanResponse = response.data.timeSeries.filter((weatherReport, index) => {
  if(index % 12 === 0) {
   return weatherReport;
  }
 });
 // Check weatherSituation, doing hardcoded indexes now to avoid
 // looping inferno and hope the API doesnt change :)
for (var i = 0; i < cleanResponse.length; i++) {
 cleanResponse[i].temperature = cleanResponse[i].parameters[tempIndex].values[0];
 cleanResponse[i].windDirection = cleanResponse[i].parameters[windDirectionIndex].values[0];
 cleanResponse[i].windSpeed = cleanResponse[i].parameters[windSpeedIndex].values[0];
 cleanResponse[i].weatherText = weatherSymbols[cleanResponse[i].parameters[weatherSymbolIndex].values[0]];
 cleanResponse[i].timeObject = timeFunction(cleanResponse[i].validTime);
 delete cleanResponse[i].parameters;
}
 console.log("Kommer hit!");

 res.json({data: cleanResponse})
})
.catch((err) => {
 res.json(err)
})


 //********* MOCK *********//
 // res.json({data: mockdata()})
});

module.exports = router;
