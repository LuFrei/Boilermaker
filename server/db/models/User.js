const Sequelize = require('sequelize');
const db = require('../db')

const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.TEXT
});

module.exports = User