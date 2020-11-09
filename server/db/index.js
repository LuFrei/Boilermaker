const { ModuleFilenameHelpers } = require('webpack');
const db = require('./db');
const {User, Post} = require('./models')

module.exports = {
  db,
  User,
  Post
}