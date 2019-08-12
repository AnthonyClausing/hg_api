const db = require('./db')

// register models
require('./models/user')
require('./models/comment')
require('./models/post')

module.exports = db