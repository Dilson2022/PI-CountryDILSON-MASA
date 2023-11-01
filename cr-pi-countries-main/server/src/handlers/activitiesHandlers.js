const {createActivity, getActivities}  = require("../controllers/activitiesControllers")

// Crea una actividad
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




//  Traer las actividades creadas
const getActivitiesHandlers = async (req, res) =>{

    try {
        const activities = await getActivities(); // Llama al controlador
        res.send(activities); // Envio de actividades como respuesta

    } catch (error) {
        console.error('Error al obtener actividades:', error);
        res.status(500).send('Error al obtener actividades. Inténtalo de nuevo más tarde.')// Envío de mensaje de error al cliente
    }

 };


module.exports = {
    createActivitiesHandler,
    getActivitiesHandlers,
}