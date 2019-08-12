const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  content: {
    type: Sequelize.STRING
  },
  contentType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageId: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Post;