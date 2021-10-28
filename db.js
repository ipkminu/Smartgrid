const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');

path = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
});

const joeur = require('./models/joueurs')
const Joeur = joueur(sequelize);

(async () => {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
})()


module.exports = {
    sequelize: sequelize,
    models: {
        Joueur: Joeur
    }
}
