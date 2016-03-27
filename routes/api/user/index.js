(function() {
  'use strict';
  const express = require('express');
  const router = express.Router();
  const request = require('request'); // move to separate route
  const RSS_URL = 'https://api.fantasydata.net/nfl/v2/json/News'; // move to separate route


  const User = require(global.models + '/User');


  router.post('/register', User.register, User.login, (req, res) => {
    res.send('Registered successfully');
  });

  router.post('/login', User.login, (req, res) => {
    res.send('Welcome back!');
  });

  router.get('/rss', (req, res) => {
    console.log('in rss');
    request(RSS_URL, {
      headers: { 'Ocp-Apim-Subscription-Key': 'ff77733713e9497a8156473c5683ccfd' }
    }, function(error, response, body) {
      console.log(response.body);
      res.send(response.body);
    })
  })

  module.exports = router;
}());
