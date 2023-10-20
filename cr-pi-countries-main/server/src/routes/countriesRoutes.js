const { Router } = require('express');

const {
    //getCountryHandlerName,
    getCountriesHandler,
    countriesHandlerByIdFun,
} = require('../handlers/countriesHandlers');

const countriesRoutes = Router();

countriesRoutes.get('/', getCountriesHandler); // Ruta para obtener todos los países
//countriesRoutes.get('/search', getCountryHandlerName); // Ruta para buscar países por nombre
countriesRoutes.get('/:idPais',countriesHandlerByIdFun); // Ruta para obtener un país por su ID

module.exports = countriesRoutes;
