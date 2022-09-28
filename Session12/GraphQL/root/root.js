// the root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello World!';
  },
  hacktiv8: () =>{
    return "king of hacktiv8";
  },
  user:()=>{
    return  {
      id: 1,
      username: 'kiki',
      password: 'admin123'
    }
  }
}

/*
GraphiQL
query Hacktiv8{
  hacktiv8
}
query hello{
  hello
}
query root{
  user {
    id
    username
    password
  }
}
*/

module.exports = root;