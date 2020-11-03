const sequelize = require('../../config/sequelize.js');


const TodoModel = sequelize.define("TodoModel", {
    projectId: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: true
    },
    filterId: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: true
    },
    statusId: {
        type: sequelize.Sequelize.INTEGER,
        allowNull: true
    },
    text: {
        type: sequelize.Sequelize.STRING,
        allowNull: true
    }
});

TodoModel.sync({force: false}).then(() => {console.log("Todo Table Synchronized")});

module.exports = TodoModel;
