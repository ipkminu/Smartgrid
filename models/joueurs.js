const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Joueur', {
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
    });
}
