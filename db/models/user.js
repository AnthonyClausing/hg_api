const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User;