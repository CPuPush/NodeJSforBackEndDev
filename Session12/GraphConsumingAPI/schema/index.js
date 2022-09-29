const {buildSchema} = require('graphql');
const userSchema = require('./user');
const userapiSchema =require('./apis');
const createdUser = require('./createdUser');
// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
    user: User
    userapi: [Userapi]
    getCreatedUser: [createdUser]
  }
  type Mutation {
    createUser(id: Int!, username: String!):String
  }
  ${userSchema}
  ${userapiSchema}
  ${createdUser}
`);
module.exports = schema;

/*
type Query {
    hello: String
    user: User
    userapi: [Userapi]
    createUser(id: int!, username: String!,password: String!):User 
  }
*/