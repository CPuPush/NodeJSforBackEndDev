const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const root = require('./root/root');
// // the root provides a resolver function for each API endpoint
// let root = {
//   hello: () => {
//     return 'Hello World!';
//   },
//   hacktiv8: () =>{
//     return "king of hacktiv8";
//   },
//   user:()=>{
//     return  {
//       id: 1,
//       username: 'kiki',
//       password: 'test'
//     }
//   }
// }


let app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8080);
console.log(`listening on http://localhost:8080/graphql`);


/*
dalam module export jika kita import folder saja maka otomatis akan mengarah ke index
jika kita import ke file langsung maka harus membuat nama variabel sesuai module export
*/