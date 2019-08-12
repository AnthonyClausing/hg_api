const postResolver = require('./post');
const commentResolver = require('./comment');
const authResolver = require('./auth');

const rootResolver = { 
  ...postResolver, 
  ...commentResolver, 
  ...authResolver
}

module.exports = rootResolver;