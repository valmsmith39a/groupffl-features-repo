(function(){
  "use strict";
  const mongoose = require('mongoose');

  const teamSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    imgUrl: { type: String },
    trashTalkRating: { type: Number, default: 0 },
    description: { type: String }
  });

  const Team = mongoose.model('Team', teamSchema);

  module.exports = Team;
}());
