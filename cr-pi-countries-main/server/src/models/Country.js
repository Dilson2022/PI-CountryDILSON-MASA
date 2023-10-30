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
      allowNull: true,
      validate:{
        isUrl: true
      }
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false // Permite valores nulos para la columna "FlagImage"
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: true // permite valores nulos para la columna "capital"
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
     }, {
      timestamps: false // Esto desactiva la creación automática de createdAt y updatedAt
    });
  };