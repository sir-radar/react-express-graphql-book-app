const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://sam:ab8ZVnOYoKLrSING@gql-books-mlmb9.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).
  catch(error => console.log(error));

mongoose.connection.once('open', ()=>{
  console.log('connected to db')
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('Listening to port 4000')
});