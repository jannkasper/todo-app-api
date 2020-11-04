const Filter = require('../../app/models/filter');

exports.getAll = (req, res) => {
    Filter.findAll({
        order: ['id']
    }).then(filters => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.end(JSON.stringify({ filters}))
    })
};


exports.addFilter = (req, res) => {
    let body = req.body;

    let newFilter = {
        title: body['title']
    };

    Filter.create(newFilter).then(() => {
        res.redirect('/filter/all')
    })
};


exports.updateFilter = (req, res) => {
    let body = req.body;
    let id = req.params['id'];

    let newFilter = {
        title: body['title']
    };

    Filter.update(newFilter, {
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/filter/all')
        }
        else {
            res.sendStatus(404)
        }
    })
};

exports.deleteFilter = (req, res) => {
    let id = req.params['id'];

    Filter.destroy({
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/filter/all')
        }
        else {
            res.sendStatus(404)
        }
    })
};
