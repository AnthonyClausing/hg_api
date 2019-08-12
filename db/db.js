const Sequelize = require('sequelize')
require('sequelize-hierarchy')(Sequelize)
const {DB_NAME, DB_USER, DB_PASSWORD} = process.env
const db = new Sequelize(
  process.env.DATABASE_URL || DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)

module.exports = db