const countriesHandlerName = (req, res) => {
    res.send("request para obtener países por nombre");
};
    

const countriesHandlers = (req, res) => {
    const { name } = req.query;
    if (name) res.send(`Quiero buscar todos los que se llamen ${name}`);
     else res.send("Quiero enviar todos los usuarios");
    };

   

const countriesHandlerById = (req, res) => {
    const {idPais} = req.params;
    res.send(`Va a enviar el detalle de el pais de ID ${idPais}`);
};

module.exports = {
    countriesHandlerName,
    countriesHandlers,
    countriesHandlerById,
};
