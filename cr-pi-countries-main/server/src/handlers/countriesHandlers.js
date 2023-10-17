const {  getAllCountries, getCountriesById, searchCountriesByName, } = require("../controllers/countriesControllers")



 const getCountriesHandlerName = async (req, res) => {

 }
    

 const getCountriesHandler = async (req, res) => {
    try {
      const countries = await getAllCountries();
      res.status(200).json(countries);
    } catch (error) {
      res.status(404).json({ error: error.message });
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
    getCountriesHandlerName,
    getCountriesHandler,
    countriesHandlerByIdFun,
    
};
