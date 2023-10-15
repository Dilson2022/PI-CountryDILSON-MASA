const {createActivity}  = require("../controllers/activitiesControllers")

const createActivitiesHandler = async (req, res) => {
    try { 
        const { Nombre, Dificultad, Duración, Temporada} = req.body;
        const newActivity = await createActivity({
            Nombre, 
            Dificultad, 
            Duración, 
            Temporada,
        });

        res.status(201).json(newActivity);
    } catch (error){

        res.status(400).json({ error: error. message});
    }
};





const activitiesHandlers = (req, res) =>{
    
    res.send(`Estoy por crear un usuario con estos datos:` )
}


module.exports = {
    createActivitiesHandler,
    activitiesHandlers,
}