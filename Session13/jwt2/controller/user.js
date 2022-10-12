const jwt = require('jsonwebtoken');
const {User} = require('../models');
const {generateToken, verifyToken} = require('../helper/jwt');
const {hashPassword, comparePassword} = require('../helper/bcrypt')

class userController {
  static async userLogin(req, res) {
    const {username, password} = req.body;
    try {
      const dataUser = await User.findOne({
        where: {
          username:username,
        }
      });
      if(dataUser){
        // password in body compare to password in database
        const isCorrect = comparePassword(password, dataUser.password);
        // const comparePassword = password === dataUser.password;
        if(isCorrect) {
          const token = generateToken({
            id: dataUser.id,
            username: dataUser.username
          });
          res.status(200).json({message:"login berhasil", token})
        }else{
          res.status(400).json({message: "username not found"})
        }

      }else{
        res.status(400).json({message: "user not found"});
      }
    } catch (error) {
      res.status(500).json({message:error.message })
    }
  }

  static async createUser(req, res) {
    const {username, password} = req.body;
    // const hashedPassword = hashPassword(password); we don't need this anymore cause in the hooks model, we had create hashed password
    try {
      const dataUser = await User.create({
        username, 
        password
        // password: hashedPassword
      });
      res.status(201).json({message:"Succes create user", dataUser});
    } catch (error) {
      res.status(500).json({message:error.message })
    }
  }
}

module.exports = userController;

/*
iat pada verify token adalah waktu expired yang bisa di atur defaultnya.
*/

        
        // // yang ingin di di buat 
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

        // console.log(signToken, "ini sign token");
        // console.log(verifyToken, "ini verify token");
