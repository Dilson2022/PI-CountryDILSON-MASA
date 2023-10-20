const { getAllCountries, getCountriesById, searchCountriesByName } = require("../controllers/countriesControllers");

const getCountryHandlerName = async (req, res) => {
  const { name } = req.query;
  try {
    let countries;
    if (name) {
      countries = await searchCountriesByName(name); // Asegúrate de que searchCountriesByName esté correctamente implementado
    } else {
      countries = await getAllCountries();
    }
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error al obtener países:', error);
    res.status(500).json({ error: 'Error al obtener datos de países desde la base de datos.' });
  }
};

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let countries;
    if (name) {
      countries = await searchCountriesByName(name);
    } else {
      countries = await getAllCountries();
    }
    res.status(200).json(countries);
  } catch (error) {
    console.error("Error al obtener países:", error);
    res.status(500).json({ error: "Error al obtener datos de países" });
  }
};

const countriesHandlerByIdFun = async (req, res) => {
  try {
    const { idPais } = req.params;
    const source = isNaN(idPais) ? "bdd" : "api";
    const countries = await getCountriesById(idPais, source);

    if (!countries) {
      return res.status(404).json({ error: "No se encontró ningún país con el ID proporcionado." });
    }

    res.status(200).json(countries);
  } catch (error) {
    console.error("Error en la solicitud:", error);
    res.status(500).json({ error: "Hubo un problema al procesar tu solicitud." });
  }
};

module.exports = {
  getCountryHandlerName,
  getCountriesHandler,
  countriesHandlerByIdFun,
};
