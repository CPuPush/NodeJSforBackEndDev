const db = require('../config/db');

class TodoController{
  // GET ALL TODOS
  async getTodos(req, res){
    try {
      let result = await db.query(`SELECT * FROM todos;`);
      const resultName = ubahNama(result.rows);
      console.log(resultName);
      return res.render("home", {
        todos: resultName,
        title: "test",
      });
    } catch (error) {
      return res.send(error);
    }
  }

  static async createTodo(req, res) {
    try {
      const newTitle = req.body.title;

      let results = await db.query(
        `INSERT INTO todos(title, checked) VALUES($1, $2);`,
        [newTitle, false]
      );
      return res.send("BERHASIL MEMBUAT TODO");
    } catch (error) {
      return res.send(error);
    }
  }

  static async updateTodo(req, res){
    try {
      const newChecked = req.body.checked;
      const todoId = req.params.todoId;

      const findTodoById = await db.query(`SELECT * FROM todos WHERE id=$1;`,[
        parseInt(todoId)
      ]);

      await db.query(`UPDATE todos SET checked=$1 WHERE id=$2;`,
      [
        !findTodoById.rows[0].checked,
        parseInt(todoId),
      ]);
      return res.send("Berhasil UPDATE");
    } catch (error) {
      return res.send(error);
    }
  }

  static async deleteTodo(req, res) {
    try {
      const todoId = req.params.todoId;
      await db.query(`DELETE FROM todos WHERE id = $1;`, [
        parseInt(todoId)
      ]);

      return res.send("Berhasil Delete dengan id = " + todoId);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }
}


module.exports = TodoController;
