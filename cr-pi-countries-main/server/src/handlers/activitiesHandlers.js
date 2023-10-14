const {createActivities} = require("../controllers/activitiesControllers")

const createHandler = async (req, res) => {

    try { 
        const { name, email, phone } = req.body;
        const newActivities = await createActivities(name,email,phone);
        res.status(201).json(newActivities);
    } catch (error){
        res.status(400).json({ error: error. message});
    }
};





const activitiesHandlers = (req, res) =>{
    
    res.send(`Estoy por crear un usuario con estos datos:` )
}


module.exports = {
    createHandler,
    activitiesHandlers,
}