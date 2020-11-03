const Todo = require('../models/todo.js');

exports.getAll = (req, res) => {
    Todo.findAll({
        order: ['id']
    }). then(todos => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({todos}))
    })
};


exports.createTodo = (req, res) => {
    let body = req.body;

    let newTodo = {
        projectId: body['projectId'],
        filterId : body['filterId'],
        statusId: body['statusId'],
        text : body['text']
    };

    Todo.create(newTodo).then(() => {
        res.redirect('/todo/all')
    })
};

exports.updateTodo = (req, res) => {
    let body = req.body;
    let id = req.params['id'];

    let newTodo = {
        projectId: body['projectId'],
        filterId : body['filterId'],
        statusId: body['statusId'],
        text : body['text']
    }

    Todo.update(newTodo, {
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/todo/all')
        }
        else {
            res.sendStatus(404)
        }
    })
}


exports.deleteTodo = (req, res) => {
    let id = req.params['id'];

    Todo.destroy({
        where: {
            id: id
        }
    }).then((count) => {
        if(count > 0){
            res.redirect('/todo/all')
        }
        else {
            res.sendStatus(404)
        }
    })
};
