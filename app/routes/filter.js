const express = require('express');
const router = express.Router();

const filterController = require('../controllers/filter');

router.get('/filter/get-all', filterController.getAll);

router.get('/about', function (req, res) {
    res.send('About birds')
})

router.post('/filter/create-new', filterController.createFilter);

module.exports = router;
