const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Activity = sequelize.define('Activity', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Dificultad: {
      type: DataTypes.ENUM("1", "2", "3", "4","5"),
      allowNull: false
    },
    Duración: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Temporada: {
      type: DataTypes.ENUM('Summer', 'Otoño', 'Invierno', 'Primavera'),
      allowNull: false
    }
  });
};
