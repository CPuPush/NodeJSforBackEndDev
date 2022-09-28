const express = require('express');
const router = express.Router();
const Todo = require('../controllers/Todo');

// GET ALL TODOS
router.get('/', async (req, res) => {

});

// CREATE A TODO
router.post('/todo', async (req, res) => {

});

// UPDATE A TODO
router.put('/todos/:todoId', async (req, res) => {

});

// DELETE A TODO
router.delete('/todos/:todoID', async (req, res) => {

});

module.exports = router;