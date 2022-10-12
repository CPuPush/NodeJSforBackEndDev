const { User } = require('../models');
const { verifyToken } = require('../helper/jwt');

async function authentication (req, res, next) {
  try {
    // check in postman headers authorization
    const token = req.headers.authorization;
    const userDecoded = verifyToken(token);
    const user = await User.findOne({
      where: {
        id: userDecoded.id,
        username: userDecoded.username
      },
    });

    console.log(user);

    if(!user) {
      return res.status(401).json({
        message: "User Not Found"
      });
    } 
    res.dataUser = user;
    return next();
  } catch (error) {
    res.status(401).json(error);
  }
}

module.exports = authentication;