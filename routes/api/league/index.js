const express = require('express');
const router = express.Router();

const League = require(global.models + "/League");
const User = require(global.models + "/User");

router.get('/', (req, res) => {
  League.find({}, (err, leagues) => {
    if (err) return res.status(400).send(err);
    res.send(leagues);
  });
});

module.exports = router;