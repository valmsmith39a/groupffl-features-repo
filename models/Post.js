(function() {
  'use strict';
  const mongoose = require('mongoose');

  let postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
    // title: { type: String, required: true },
    description: { type: String, maxlength: 30000, required: true },
    date: { type: Date, default: Date.now() }
  });

  postSchema.statics.createMW = (req, res, next) => {
    if (!req.body.leagueId || !req.body.title || !req.body.description) {
      return res.status(400).send('League Id, Team Id, Post Title, and Post Description are all required');
    }

    mongoose.model('League').findById(req.body.leagueId, (err, foundLeague) => { // FIXME: Change to findOne for ID && teamId in teams array
      if (err) { return res.status(400).send(err); }
      if (!foundLeague.teams.indexOf(req.body.teamId) === -1) { return res.status(400).send('Selected Team does not belong to selected League'); }
      mongoose.model('Team').findOne({ _id: req.body.teamId, owner: req.user }, (err, foundTeam) => {
        if (err) { return res.status(400).send(err); }
        if (!foundTeam) { return res.status(403).send('You do not own a Team with thid Id'); } //This should never happen if league has refernce to teamId

        let newPost = new Post();
        newPost.title = req.body.title;
        newPost.description = req.body.description;
        newPost.author = req.user;
        newPost.league = foundLeague._id;

        foundLeague.posts.push(newPost._id);
        foundTeam.posts.push(newPost._id);

        newPost.save(err => {
          if (err) { return res.status(400).send(err); }
          foundLeague.save(err => {
            if (err) { return res.status(400).send(err); }
            foundTeam.save(err => {
              if (err) { return res.status(400).send(err); }
              next();
            });
          });
        });
      });
    });
  };

  const Post = mongoose.model('Post', postSchema);

  module.exports = Post;
}());
