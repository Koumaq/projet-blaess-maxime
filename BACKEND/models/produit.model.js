module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
        },
        imglink: {
            type: Sequelize.STRING
        },
        prix: {
            type: Sequelize.FLOAT,
        },
        description: {
            type: Sequelize.STRING,
        },
    });
    return Produit;
};