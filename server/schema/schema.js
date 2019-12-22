const graphql = require('graphql');

const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author:{
      type: AuthorType,
      resolve(parent, args){

      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books:{
      type: new GraphQLList(BookType),
      resolve(parent, args){
        
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    books:{
      type: BookType,
      args:{id:{type: GraphQLID}},
      resolve(parent, args){
        //code to get data from db/other sources
      }
    },
    author:{
      type: AuthorType,
      args:{id:{type: GraphQLID}},
      resolve(parent, args){

      }
    },
    books:{
      type: new GraphQLList(BookType),
      resolve(parent, args){
        
      }
    },
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(parent, args){

      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})