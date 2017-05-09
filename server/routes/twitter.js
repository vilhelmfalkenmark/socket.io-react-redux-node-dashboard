const express = require('express');
const router = express.Router(); // get an instance of the express Router
const Twitter = require('twitter');

const client  = new Twitter({
  consumer_key:         'Hfu0sdS2wpFK2MI8R4z7s8qUV',
  consumer_secret:      'dA3syyC4aKgSuKQyrEEs8TvcYIeBnFy2yLkupM0vUzhvAiuVdb',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAACYa0gAAAAAAp%2BRo7DowESEN1K8COwxQL7NmDMY%3DDE6CyFvJNSyU2q2aIynV4yl2XNANQ09fzafjyTeQPz0MQcZceu'
  // access_token:         '721044744206475264-8EaTBKGToqGGpGTGvv8bsC5UFHIbhtD',
  // access_token_secret:  '9Io6OFxx4KK9IqVipeZNith7Mi1QHe8AHVnsjwJB5CoAm'
})

router.route('/').get((req, res) => {


 const params = {screen_name: 'dagensnyheter', count: 6};

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


// const request = require('request');
// var consumer_key = 'Hfu0sdS2wpFK2MI8R4z7s8qUV'
// var consumer_secret = 'dA3syyC4aKgSuKQyrEEs8TvcYIeBnFy2yLkupM0vUzhvAiuVdb'
// var enc_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

//  var oauthOptions = {
//    url: 'https://api.twitter.com/oauth2/token',
//    headers: {'Authorization': 'Basic ' + enc_secret, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
//    body: 'grant_type=client_credentials'
//  };
//
//  request.post(oauthOptions, function(e, r, body) {
//   console.log(body)
// });
