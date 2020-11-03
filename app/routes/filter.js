const express = require('express');
const router = express.Router();

const filterController = require('../controllers/filter');

router.get('/filter/all', filterController.getAll);

router.post('/filter/add', filterController.createFilter);

module.exports = router;
