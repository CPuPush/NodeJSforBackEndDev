const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const root = require('./root');


let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log(`http://localhost:4000/graphql`);
});
// menit 17:33