const jwt = require('jsonwebtoken');
const SECRET = "sangatrahasia";

function generateToken(payload){
  const token = jwt.sign(payload, SECRET);
  return token;
}

function verifyToken(token){
  const decoded = jwt.verify(token, SECRET);
  return decoded;
}

module.exports = {
  generateToken,
  verifyToken
}

    // const signToken = jwt.sign({
        //   id: dataUser.id,
        //   username: dataUser.username
        // },
        // "SECRET"//seperti kata kunci yang ingin di verify
        // ,{
        //   expiresIn: '5s'
        // }
        // );

 // const verifyToken = jwt.verify(signToken, "SECRET");
