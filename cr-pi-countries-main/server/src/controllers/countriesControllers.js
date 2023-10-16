const axios = require('axios');
const { Country } = require('../db');

// const cleanArray = (arr) => 
//     arr.map(elem=>{
//         return{

//         };
//     });


const getCountriesById = async (idPais, source) => {
    let countries;
    if (source === 'api') {
        // Aquí realizas la lógica para obtener datos de la API con el código de tres letras
        const response = await axios.get(`http://localhost:5000/countries/${idPais}`);
        //Aquí se asignan los datos obtenidos de la API a la variable countries.
        countries = response.data;
    } else {
        //si no es una api, se utiliza el metodo (findByPk) del modelo Country para buscar y devolver los detalles del país correspondientes al idPais
        countries = await Country.findByPk(idPais);
    }
    //  devuelve los detalles del país obtenidos, ya sea de la API o de la base de datos, dependiendo del valor de source.
    return countries;
};

// Busca en la base de datos
const getAllCountries = async () => {
    const databaseCountries = await Country.findAll()
    const apiCountries =( await axios.get("http://localhost:5000/countries")
    ).data

    // const apiCountries = cleanArray(apiCountries)

    return [...databaseCountries, ...apiCountries];
     
};


const searchCountriesByName = (name) => {
    


};


module.exports = { getCountriesById, searchCountriesByName, getAllCountries };
