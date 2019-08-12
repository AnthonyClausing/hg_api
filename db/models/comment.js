const Sequelize = require('sequelize');
const db = require('../db')

const Comment = db.define('comment', {
  text: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  imageId: {
    type: Sequelize.STRING,
    allowNull: true
  }
})
Comment.isHierarchy({ childrenAs: 'replies' })
module.exports = Comment;