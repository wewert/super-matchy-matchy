module.exports = function (sequelize, Datatypes) {
    var Image = sequelize.define("image", {
        image_name: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
    return Image;
};