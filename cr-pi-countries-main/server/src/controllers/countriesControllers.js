const axios = require('axios');
const { Country, Op } = require('../db');


const getAllCountries = async () => {
  try {
    const countries = await Country.findAll();
    if (countries.length === 0) throw new Error('No se encontraron países en la base de datos.');
    return countries;
  } catch (error) {
    throw new Error('Error al obtener datos de países desde la base de datos.');
  }
};

const searchCountriesByName = async (name) => {
  try {
    const countriesData = await getAllCountries();
    const result = countriesData.filter((country) =>
      country.Nombre.toLowerCase().includes(name.toLowerCase())
    );
    if (result.length > 0) return result;
    else throw new Error('No se encontraron países con el nombre especificado.');
  } catch (error) {
    throw new Error('Error al obtener datos de países desde la base de datos.');
  }
};


const getCountriesById = async (idPais, source) => {
  let country;
  if (source === 'api') {
    const response = await axios.get(`http://localhost:5000/countries/${idPais}`);
    country = response.data;
  } else {
    country = await Country.findByPk(idPais);
  }
  return country;
};

module.exports = { getAllCountries, getCountriesById, searchCountriesByName };
