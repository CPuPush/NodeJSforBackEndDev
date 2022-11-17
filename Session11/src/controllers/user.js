class UserController {
  static async getUser(req, res) {
    return res.send("This is from User Controller");
  }
}

module.exports = UserController;
