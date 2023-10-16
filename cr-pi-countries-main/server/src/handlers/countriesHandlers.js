const {getCountriesById, searchCountriesByName, getAllCountries} = require("../controllers/countriesControllers")


const countriesHandlerName = (req, res) => {
    res.send("request para obtener países por nombre");
};
    

const countriesHandlers = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchCountriesByName(name): await getAllCountries();

    res.status(200).json(results);

    };

    
    

const countriesHandlerByIdFun = async (req, res) => {
    const {idPais} = req.params;
    const source = isNaN(idPais) ? "bdd" : "api"; // si id no es un numero, busca en la base de datos, y si es un numero, busca en la api
    try {
        const countries = await getCountriesById(idPais, source)
        res.status(200).json(countries);
    }   catch (error) {
        res.status(400).json({error:error.message})
    }
    
};

module.exports = {
    countriesHandlerName,
    countriesHandlers,
    countriesHandlerByIdFun,
    
};
