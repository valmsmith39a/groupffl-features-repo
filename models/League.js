(function() {
  'use strict';
  const mongoose = require('mongoose');
  const Team = require(global.models + '/Team');
  const User = require(global.models + '/User');

  let leagueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    commissioner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }]
  });

  leagueSchema.statics.createMW = (req, res, next) => {
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
      team.name = req.body.team;
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
              req.resData = {
                message: 'League created',
                data: { league: league }
              };
              next();
            });
          });
        });
      });
    });
  };

  const League = mongoose.model('League', leagueSchema);

  module.exports = League;
}());
