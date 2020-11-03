const sequelize = require('../../config/sequelize.js');

const ProjectModel = sequelize.define("ProjectModel",{
    title: {
        type: sequelize.Sequelize.STRING,
        allowNull: false
    }
});

ProjectModel.sync({force: false}).then(() => {console.log("Project Table Synchronized")});

module.exports = ProjectModel;
