module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define('Show', {
    venue: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    stopTime: DataTypes.DATE,

  }, {classMethods: {
      associate: function(models) {
        Show.belongsTo(models.artist);
      },
    },
  });

  return Show;
};
