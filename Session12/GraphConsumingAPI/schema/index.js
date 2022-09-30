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

/* //! userSchema
const userSchema = `
  //* type User{
    name: String
    username: String
    password: String
  }
`;

//! createdUser
const createdUser = 
//* `type createdUser{
  id: Int
  username: String
}`;

//! userapiSchema
const userapiSchema = `
  //* type Userapi{
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
  }
  type Address{
    street: String
    suite: String
    zipcode: String
    geo: Geo
  }
  type Geo {
    lat: String
    lng: String
  }
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
`;
*/