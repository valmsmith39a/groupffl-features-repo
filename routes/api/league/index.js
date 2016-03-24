(function(){
  'use strict';
  const express = require('express');
  const router = express.Router();

  const League = require(global.models + '/League');
  const Team = require(global.models + '/Team');
  const User = require(global.models + '/User');

  router.get('/', (req, res) => {
    League.find({}, (err, leagues) => {
      if (err) { return res.status(400).send(err); }
      res.send(leagues);
    });
  });

  router.post('/', User.isLoggedIn, (req, res) => {
    if (!req.body.team || !req.body.title) { return res.status(400).send('Missing League or Team name'); }
    let title = req.body.title.trim();
    let titleReg = new RegExp(`^${title}$`, 'i');
    League.findOne({ title: titleReg }, (err, foundLeague) => {
      if (err) { return res.status(400).send(err); }
      if (foundLeague) { return res.status(400).send('A League with this name already exists'); }

      let league = new League();
      league.title = title;
      league.commissioner = req.user;

      let team = new Team();
      team.title = req.body.team;
      team.owner = req.user;
      team.league = league._id;

      league.teams.push(team._id);

      User.findById(req.user, (err, foundUser) => {
        if (err) { return res.status(400).send(err); }

        foundUser.leagues.push(league._id);
        foundUser.teams.push(team._id);
        foundUser.save(err => {
          if (err) { return res.status(400).send(err); }
          league.save(err => {
            if (err) { return res.status(400).send(err); }
            team.save(err => {
              if (err) { return res.status(400).send(err); }
              res.send({
                message: 'League created',
                data: { league: league }
              });
            });
          });
        });
      });
    });
  });

  module.exports = router;
}());
