const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const allCountry = require("./src/controllers/allCountry");
const {Country} = require("./src/db");





conn.sync({ alter: true }).then(async () => {
  try {
    const count = await Country.count();
    if (count <= 0) {
      const countries = await allCountry(); // Asegúrate de que allCountry es una función que devuelve una promesa
   // console.log("Datos de países obtenidos:", countries);
    await Country.bulkCreate(countries); // Me inserta los datos en la base de datos
    }
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}).catch(error => console.error('Error al sincronizar la base de datos:', error));






// En resumen, este código asegura que la base de datos esté sincronizada y 
// que se haya insertado al menos un registro de países si no hay datos presentes.
// Además, se inicia el servidor para permitir la comunicación con los clientes.
//  Cualquier error que ocurra se manejará y registrará adecuadamente en la consola para facilitar la depuración.