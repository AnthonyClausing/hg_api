const Sequelize = require('sequelize')
require('sequelize-hierarchy')(Sequelize)
const {DB_NAME, DB_USER, DB_PASSWORD} = process.env
var db;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  // the application is executed on Heroku ... use the postgres database
  db = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  })
} else {
  db =  new Sequelize(
    process.env.DATABASE_URL || DB_NAME, DB_USER, DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      logging: false
    }
  )
}


module.exports = db