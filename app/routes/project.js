const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project');

router.get('/project/all', projectController.getAll);

router.post('/project/add', projectController.addProject);

router.post('/project/:id/update', projectController.updateProject);

router.post('/project/:id/delete', projectController.deleteProject);

module.exports = router;
