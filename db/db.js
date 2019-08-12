const Sequelize = require('sequelize')
require('sequelize-hierarchy')(Sequelize)

const db = new Sequelize(
  process.env.DATABASE_URL || 'hg_dev', 'postgres', 'coderboy', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)

module.exports = db