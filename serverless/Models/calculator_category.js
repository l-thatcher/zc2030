const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Category = sequelize.define(`Category`, {
    category_id: {
        type: DataTypes.bigint,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING
    }
});

console.log(Category === sequelize.models.Category)