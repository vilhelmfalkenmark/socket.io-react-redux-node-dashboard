const express = require('express');
const router = express.Router(); // get an instance of the express Router
const Twitter = require('twitter');
const axios = require('axios')
const request = require('request');

const client  = new Twitter({
  consumer_key:         'dJUUVznOTJYgdwS3rY2RzPdEt',
  consumer_secret:      'v9Q31hgBarcvoPjGu7IHwyxRMXNxb0xtts93HltEuX7kfSCvuk',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAKytugAAAAAAIepVtSO70hMAW15TqgPj0ShthW4%3Drp1j39MYnevCi56NvGd9QbSp9sJA4j13js5lvwsLjZHrdBniqo'
  // access_token:         '721044744206475264-kW7Pb2SeniCxuVZDfzD3yR3IORQDWzj',
  // access_token_secret:  'XfJjisUr97en5K7WMNIquF7OlfSsOKgpAKvoXAQJzt5HR'
})

// var consumer_key = 'dJUUVznOTJYgdwS3rY2RzPdEt'
// var consumer_secret = 'v9Q31hgBarcvoPjGu7IHwyxRMXNxb0xtts93HltEuX7kfSCvuk'
// var enc_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');
//
// var oauthOptions = {
//   url: 'https://api.twitter.com/oauth2/token',
//   headers: {'Authorization': 'Basic ' + enc_secret, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
//   body: 'grant_type=client_credentials'
// };

router.route('/').get((req, res) => {
 const params = {screen_name: 'dagensnyheter', count: 2};

 client.get('statuses/user_timeline', params, (error, tweets, response) => {
   if (!error) {
     // console.log(tweets);
     // console.log(response);
     res.json({data: tweets})
   } else {
    console.log("Det blev en error!");
    res.json({error: error})
   }
 });
});

module.exports = router;
