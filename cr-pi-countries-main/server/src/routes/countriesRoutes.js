const { Router } = require('express');

const {
    getCountriesHandlerName,
    getCountriesHandler,
    countriesHandlerByIdFun,
} = require('../handlers/countriesHandlers');

const countriesRoutes = Router();

countriesRoutes.get('/', getCountriesHandler); // Ruta para obtener todos los países
countriesRoutes.get('/:idPais',countriesHandlerByIdFun); // Ruta para obtener un país por su ID
countriesRoutes.get('/name', getCountriesHandlerName); // Ruta para buscar países por nombre

module.exports = countriesRoutes;
