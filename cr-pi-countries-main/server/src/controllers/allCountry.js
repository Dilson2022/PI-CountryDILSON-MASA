const axios = require("axios");

const allCountry = async () => {
  try {
    const result = await axios.get('http://localhost:5000/countries');
    const filteredData = result.data.map((e) => {
    
      return {
        ID: e.cca3,
        Nombre: e.name?.common,
        FlagImage: e.flags?.png,
        Continente: e.continents?.[0],
        Capital: e.capital?.[0],
        Subregion: e.subregion,
        Area: e.area,
        Poblacion: e.population 
      };
    });
    return filteredData;
  } catch (error) {
    console.error('Error al obtener los países:', error);
    throw error; // Propagar el error hacia arriba
  }
};

module.exports = allCountry;



// En este código, se utiliza la función map para iterar sobre los datos obtenidos de la solicitud y 
// se crea un nuevo objeto con las claves especificadas en el formato deseado.
// Este nuevo objeto se agrega al array filteredData. Luego,
//  la función devuelve filteredData para que puedas utilizar este array con los datos filtrados en otro lugar de tu código.