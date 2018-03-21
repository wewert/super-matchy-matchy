module.exports = function (sequelize, Datatypes) {
    const Card = sequelize.define("card", {
        card_value: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    return Card;
};
