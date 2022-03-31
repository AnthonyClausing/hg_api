const Sequelize = require('sequelize')
require('sequelize-hierarchy')(Sequelize)
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config.json')[env];
var db;
if (config.use_env_variable) {
  // the application is executed on Heroku ... use the postgres database
  db = new Sequelize(process.env[config.use_env_variable])
} else {
  db =  new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      port: config.port,
      dialect: config.dialect,
      logging: false
    }
  )
}


module.exports = db