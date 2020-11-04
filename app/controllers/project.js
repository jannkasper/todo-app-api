const Project = require('../../app/models/project');

exports.getAll = (req, res) => {
    Project.findAll({
        order: ['id']
    }).then(projects => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.end(JSON.stringify({ projects }))
    })
};


exports.createProject = (req, res) => {
    let body = req.body;

    let newProject = {
        title: body['title']
    };

    Project.create(newProject).then(() => {
        res.redirect('/project/all')
    })
};
