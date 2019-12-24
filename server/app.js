const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://sam:ab8ZVnOYoKLrSING@gql-books-mlmb9.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).
  catch(error => console.log(error));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('Listening to port 4000')
});