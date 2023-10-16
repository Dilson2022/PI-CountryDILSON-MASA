const { Activity, Country} = require("../db");


const createActivity = async (activityData) => { 
   const {Nombre, Dificultad, Duración, Temporada} = activityData;
    return await Activity.create({
        Nombre,
        Dificultad,
        Duración,
        Temporada,
    }); 

;    }

    


    
const getActivities = async () => {
    try {
        const activities = await Activity.findAll({
            include: {
                model: Country,
                through: { attributes: [] 
                },
            }
        });
        return activities;
    } catch (error) {
        console.error('Error al obtener actividades:', error); // Imprimir el error en la consola
        throw new Error('Error al obtener actividades desde la base de datos.');
    }
};
 

module.exports = {
    createActivity,
    getActivities,
};
