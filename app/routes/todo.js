const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/todo/all', todoController.getAll);

router.post('/todo/add', todoController.createTodo);

router.post('/todo/:id/update', todoController.updateTodo);

router.post('/todo/:id/delete', todoController.deleteTodo);

module.exports = router;
