const axios = require('axios');
// the root provides a resolver function for each API endpoint
const temp = [];

let root = {
  hello: () => {
    return "hello guys";
  },
  user: () =>{
    return {
      id: 1,
      username: 'king of pop',
      password: 'nano123'
    }
  },
  userapi: async () => {
    try {
        const {data} = await axios.get('http://jsonplaceholder.typicode.com/users');
        return data;
      } catch (error) {    
        return [];
      }
  },
  createUser: (args) => {
    const {id, username} = args;
    temp.push(({id, username}));
    return "successfully create one user";
    /*
    type Mutation {
    //* createUser(id: Int!, username: String!):String
  }
    */
  },
  getCreatedUser: () =>{
    return temp;
  }
};

module.exports = root;

/*
axion for consuming api

mutasi membuat penambahan pada graphql
Int! => artinya tidak boleh kosong


query hello {
  hello
}

query hai {
  user {
    username
    password
  }
}

query test{
  userapi{
    id
    name
    username
    email
    address {
      street
      suite
      zipcode
    }
    phone
    website
    company {
      name
      catchPhrase
      bs
    }
  }
}
//!For mutation
mutation create{
  createUser(id:4,username:"things")
}
query getUser{
  getCreatedUser{
    id
    username
  }
}
*/