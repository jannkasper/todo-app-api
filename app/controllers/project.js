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


exports.addProject = (req, res) => {
    let body = req.body;

    let newProject = {
        title: body['title']
    };

    Project.create(newProject).then(() => {
        res.redirect('/project/all')
    })
};

exports.updateProject = (req, res) => {
    let body = req.body;
    let id = req.params['id'];

    let newProject = {
        title: body['title']
    };

    Project.update(newProject, {
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/project/all')
        }
        else {
            res.sendStatus(404)
        }
    })
};

exports.deleteProject = (req, res) => {
    let id = req.params['id'];

    Project.destroy({
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/project/all')
        }
        else {
            res.sendStatus(404)
        }
    })
};
