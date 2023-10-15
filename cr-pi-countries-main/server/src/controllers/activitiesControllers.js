const { Activity} = require("../db");

const createActivity = async (Nombre, Dificultad, Duración, Temporada) =>
    await Activity.create({Nombre, Dificultad, Duración, Temporada});
    

const activitiesHandlers = (req, res) => {
    res.send(`Estoy por crear un usuario con estos datos:`);
};

module.exports = {
    createActivity,
    activitiesHandlers,
};
