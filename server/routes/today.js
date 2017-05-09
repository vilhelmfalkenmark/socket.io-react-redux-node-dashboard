const express = require('express');
const router = express.Router(); // get an instance of the express Router
const axios = require('axios');
const mockdata = require('../mockdata/today');

const dateURL = () => {
 const today = new Date();
 return `${today.getYear() + 1900}/${today.getMonth() + 1}/${today.getDate()}`;
}

const months = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];

router.route('/').get((req, res) => {
// REAL
axios.get(`http://api.dryg.net/dagar/v2.1/${dateURL()}`)
.then((response) => {
  const dateArray = response.data.dagar[0].datum.split("-");
  const dateObject = response.data.dagar[0]

  const responseObject = {
   year: dateArray[0],
   month: dateArray[1],
   monthName: months[parseInt(dateArray[1] - 1 )],
   day: dateArray[2],
   names: dateObject.namnsdag,
   weekDay: dateObject.veckodag,
   holiday: dateObject["röd dag"] === "nej",
   week: dateObject.vecka
  };

res.json({data: responseObject})
})
.catch((err) => {
  res.json(err)
})

 // MOCK
  // res.json({data: mockdata()})

});

module.exports = router;
