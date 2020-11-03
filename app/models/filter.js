const sequelize = require('../../config/sequelize.js');

const FilterModel = sequelize.define("FilterModel",{
    // id: {
    //     type: sequelize.Sequelize.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    //
    // },
    title: {
        type: sequelize.Sequelize.STRING,
        allowNull: false
    }
});

FilterModel.sync({force: false}).then(() => {console.log("Filter Table Synchronized")});

module.exports = FilterModel;
