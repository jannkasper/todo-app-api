const express = require('express');
const router = express.Router();

const filterController = require('../controllers/filter');

router.get('/filter/all', filterController.getAll);

router.post('/filter/add', filterController.addFilter);

router.post('/filter/:id/update', filterController.updateFilter);

router.post('/filter/:id/delete', filterController.deleteFilter);

module.exports = router;
