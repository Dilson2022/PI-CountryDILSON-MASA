const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: false
    }
  });

  // No es necesario el return aquí si estás utilizando module.exports
};