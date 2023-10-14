const { Router } = require("express");

const {
    createHandler,
    activitiesHandlers,
} = require("../handlers/activitiesHandlers");

const activitiesRoutes = Router();

activitiesRoutes.post("/", createHandler);
activitiesRoutes.get("/", activitiesHandlers);


module.exports = activitiesRoutes;
