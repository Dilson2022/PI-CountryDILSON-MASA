const axios = require('axios');
const { Country } = require('../db');


const getAllCountries = async () => {
    try {
      const countries = await Country.findAll();
      if (countries.length === 0) throw new Error('No se encontraron países en la base de datos.');
      return countries;
    } catch (error) {
      throw new Error('Error al obtener datos de países desde la base de datos.');
    }
  };




const getCountriesById = async (idPais, source) => {
    let countries;
    if (source === 'api') {
        const response = await axios.get(`http://localhost:5000/countries/${idPais}`);
        countries = response.data;
    } else {
        countries = await Country.findByPk(idPais);
    }
    return countries;
};




const searchCountriesByName = async (prop) => {
//     const countries = await Country.findAll(); // se espera a que se complete la consulta a la base de datos, que devuelve todos los países.

//     // Aqui Se utiliza el método filter para filtrar los países según el nombre. 
//     //El método toLowerCase se usa para realizar la comparación sin tener en cuenta las mayúsculas y minúsculas
//     const filterByName = await countries.filter((country) => country.name.toLowerCase().includes(prop.toLowerCase()));


//    // Finalmente, el código comprueba si se encontraron países que coincidan con el criterio de búsqueda
//     return filterByName.length >0 ? filterByName : "No hay paises relacionados con el valor de busqueda"
 }
    
 
 module.exports = {getAllCountries, getCountriesById, searchCountriesByName };
 
 
