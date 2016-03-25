(function() {
  'use strict';
  const mongoose = require('mongoose');

  const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League' },
    title: { type: String, required: true },
    description: { type: String, maxlength: 30000, required: true }
  });

  const Post = mongoose.model('Post', postSchema);

  module.exports = Post;
}());
