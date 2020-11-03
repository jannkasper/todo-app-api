const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project');

router.get('/project/all', projectController.getAll);

router.post('/project/add', projectController.createProject);

module.exports = router;
