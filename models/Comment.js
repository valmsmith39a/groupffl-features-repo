(function() {
  'use strict';
  const mongoose = require('mongoose');

  const commentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    text: { type: String, maxlength: 30000, required: true },
    date: { type: Date, default: Date.now() }
  });

  const Comment = mongoose.model('Comment', commentSchema);

  module.exports = Comment;
}());
