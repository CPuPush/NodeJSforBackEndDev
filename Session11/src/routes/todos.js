const TodoController = require('../controllers/Todo');

const router = require('express').Router();

router.get("/", TodoController.getTodos);
router.post("/todo", TodoController.createTodo);
router.put("/todo/:todoId", TodoController.updateTodo);
router.delete("/todo/:todoId", TodoController.deleteTodo);


module.exports = router;