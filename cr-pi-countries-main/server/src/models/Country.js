const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // Definir el modelo de Country
  const Country = sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FlagImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Subregion: {
      type: DataTypes.STRING
    },
    Area: {
      type: DataTypes.FLOAT
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
 }