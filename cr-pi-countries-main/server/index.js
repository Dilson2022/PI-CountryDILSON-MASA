const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const allCountry =require("../server/src/controllers/allCountry")
const {Country} = require("./src/db");

conn.sync({ force: true })
.then(async() => {

  try {
    const data = await allCountry; // Obtener los datos del controlador
    await Country.bulkCreate(data);  // Crear múltiples registros en la base de datos
    console.log('Datos insertados correctamente en la base de datos.');
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error){
    console.log('Error al insertar datos en la base de datos:',error);
  }
})
.catch(error => console.error('Error al sincronizar la base de datos:',error))
      
  
    
  
  
