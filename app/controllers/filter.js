const Filter = require('../../app/models/filter');

exports.getAll = (req, res) => {
    Filter.findAll({
        order: ['id']
    }).then(filters => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ filters}))
    })
};


exports.createFilter = (req, res) => {
    let body = req.body;

    let newFilter = {
        title: body['title']
    };

    Filter.create(newFilter).then(() => {
        res.redirect('/filter/get-all')
    })
};
