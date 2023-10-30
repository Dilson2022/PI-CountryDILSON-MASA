const axios = require("axios");
const { Country, Op } = require("../db");

// Aqui se usa el metodo findAll del modelo country para traerme todos los paises
const getAllCountries = async () => {
  try {
    const countries = await Country.findAll();

    if (countries.length === 0)
      throw new Error("No se encontraron países en la base de datos.");
    return countries;
  } catch (error) {
    throw new Error("Error al obtener datos de países desde la base de datos.");
  }
};

// Aqui se filtran todos los paises por el nombre
const searchCountriesByName = async (name) => {
  try {
    const countriesData = await getAllCountries();
    const result = countriesData.filter((country) =>
      country.Nombre.toLowerCase().includes(name.toLowerCase())
    );
    if (result.length > 0) return result;
    else
      throw new Error("No se encontraron países con el nombre especificado.");
  } catch (error) {
    throw new Error("Error al obtener datos de países desde la base de datos.");
  }
};

const getCountriesById = async (idPais, source) => {
  let country;
  try {
    if (source === "api") {
      const response = await axios.get(
        `http://localhost:5000/countries/${idPais}`
      );
      console.log("paises obtenidos")
      country = response.data;
    } else {
      country = await Country.findByPk(idPais);
    }

    if (!country) {
      //console.error("No se encontró ningún país con el ID proporcionado.");
      return null; // Puedes decidir cómo manejar la ausencia de datos en tu lógica
    }

    return country;
  } catch (error) {
    // console.error("Error al obtener datos del país:", error);
    throw error; // Lanza el error para manejarlo en el bloque catch del llamador
  }
};

module.exports = { getAllCountries, getCountriesById, searchCountriesByName };
