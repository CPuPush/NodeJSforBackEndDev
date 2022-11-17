class UserController {
  static async getUser(req, res) {
    return res.send("This is from User Controller");
  }
}

class TestController {
  static async getTest(req, res) {
    return res.send("This is from Test Controller");
  }
  static async getTestById(req, res) {
    const id = req.params.id;

    return res.send("This is from Test Controller By Id " + id);
  }
}

module.exports = { UserController, TestController };
