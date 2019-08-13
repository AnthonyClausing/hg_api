require('dotenv').config()
const graphqlHttp= require('express-graphql')
const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3000
const db = require('./db');
const graphQLSchema = require('./graphql/schema/index');
const graphQLResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if(req.method === 'OPTIONS'){
    return res.sendStatus(200);
  }
  next();
});

app.use('/graphql', graphqlHttp({
  schema: graphQLSchema,
  rootValue: graphQLResolvers,
  graphiql: true
}));

db.sync({force:false})
  .then(() =>{
    app.listen(PORT, () => {
      console.log('youre listening on port 3k')
    })
  })
  .catch(err =>{
    console.log(err)
  })