const { Router } = require("express");

const {
    createActivitiesHandler,
    getActivitiesHandlers,
} = require("../handlers/activitiesHandlers");

const activitiesRoutes = Router();

activitiesRoutes.post("/", createActivitiesHandler);
activitiesRoutes.get("/", getActivitiesHandlers);


module.exports = activitiesRoutes;
