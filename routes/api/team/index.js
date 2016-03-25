(function() {
  'use strict';
  const express = require('express');
  const router = express.Router();

  const League = require(global.models + '/League');
  const Team = require(global.models + '/Team');
  const User = require(global.models + '/User');

  router.get('/', User.isLoggedIn, (req, res) => {
    Team.find({ owner: req.user }, (err, teams) => {
      if (err) { return res.status(400).send(err); }
      res.send(teams);
    });
  });

  router.post('/', User.isLoggedIn, (req, res) => {
    if (!req.body.team || !req.body.leagueId) { return res.status(400).send('Both Team name & League ID are required to create a new Team'); }
    let title = req.body.team.trim();
    let titleReg = new RegExp(`^${title}$`, 'i');
    Team.findOne({ title: titleReg }, (err, foundTeam) => {
      if (err) { return res.status(400).send(err); }
      if (foundTeam) { return res.status(400).send('A Team with this name already exists in this League – Please try again with a different Team name'); }
      League.findById(req.body.leagueId, (err, foundLeague) => {
        if (err) { return res.status(400).send(err); }
        if (!foundLeague) { return res.status(400).send('League not found – Please double check that the League ID is correct'); }
        Team.findOne({ owner: req.user }, (err, foundTeam) => {
          if (err) { return res.status(400).send(err); }
          if (foundTeam) {
            return res.status(400).send({
              message: 'You already have a Team in this League',
              data: foundTeam
            });
          }

          User.findById(req.user, (err, foundUser) => {
            if (err) { return res.status(400).send(err); }
            let newTeam = new Team();
            newTeam.name = req.body.team;
            newTeam.owner = foundUser._id;
            newTeam.league = foundLeague._id;

            foundLeague.teams.push(newTeam._id);
            foundUser.teams.push(newTeam._id);
            foundUser.leagues.push(foundLeague._id);

            newTeam.save(err => {
              if (err) { return res.status(400).send(err); }
              foundLeague.save(err => {
                if (err) { return res.status(400).send(err); }
                foundUser.save(err => {
                  if (err) { return res.status(400).send(err); }
                  res.send({
                    message: 'Team created',
                    team: newTeam
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  module.exports = router;
}());
