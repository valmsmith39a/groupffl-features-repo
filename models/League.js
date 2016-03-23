(function(){
  "use strict";
  const mongoose = require('mongoose');

  const leagueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    commissioner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]
  });

  const League = mongoose.model('League', leagueSchema);

  module.exports = League;
}());
