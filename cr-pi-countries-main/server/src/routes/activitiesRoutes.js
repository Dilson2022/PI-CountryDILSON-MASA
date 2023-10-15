const { Router } = require("express");

const {
    createActivitiesHandler,
    activitiesHandlers,
} = require("../handlers/activitiesHandlers");

const activitiesRoutes = Router();

activitiesRoutes.post("/", createActivitiesHandler);
activitiesRoutes.get("/", activitiesHandlers);


module.exports = activitiesRoutes;
