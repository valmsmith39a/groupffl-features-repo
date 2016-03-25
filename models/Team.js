(function() {
  'use strict';
  const mongoose = require('mongoose');

  const teamSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    name: { type: String, required: true },
    imgUrl: { type: String },
    trashTalkRating: { type: Number, default: 0 },
    description: { type: String }
  });

  const Team = mongoose.model('Team', teamSchema);

  module.exports = Team;
}());
