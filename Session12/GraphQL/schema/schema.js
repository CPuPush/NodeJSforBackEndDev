const { buildSchema } = require('graphql');
const userSchema = require('./user');
// construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
    hacktiv8: String
    user: User
  }
  ${userSchema}
  `
);
// const userSchema = type User{
//   id: Int
//   username: String
//   password: Strin g
// }
module.exports = schema;