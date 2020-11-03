const Project = require('../../app/models/project');

exports.getAll = (req, res) => {
    Project.findAll({
        order: ['id']
    }).then(projects => {
        res.setHeader('Content-Type', 'application/json');
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
