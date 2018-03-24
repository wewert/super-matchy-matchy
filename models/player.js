var Sequelize = require('sequelize');
module.exports = function (sequelize, Datatypes) {
    var Player = sequelize.define("player", {
        player_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        game_level: {
            type: Datatypes.STRING,
            allowNull: false,
            isUppercase: true,
            validate: {
                len: [1]
            },
        },
        points: {
            type: Datatypes.INTEGER,
            allowNull: false,
            isInt: true,
        }
    });
    return Player;
};
