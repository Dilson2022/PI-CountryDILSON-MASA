const { Router } = require('express');

const {
    countriesHandlerName,
    countriesHandlers,
    countriesHandlerByIdFun,
} = require('../handlers/countriesHandlers');

const countriesRoutes = Router();

countriesRoutes.get('/', countriesHandlers); // Ruta para obtener todos los países
countriesRoutes.get('/:idPais', countriesHandlerByIdFun); // Ruta para obtener un país por su ID
countriesRoutes.get('/name', countriesHandlerName); // Ruta para buscar países por nombre

module.exports = countriesRoutes;
