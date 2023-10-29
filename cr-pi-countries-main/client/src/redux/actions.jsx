import axios from "axios";


export  const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID"

// Este es el action create que retorna una funcion, que hace la peticion y la despacha
export const getCountries = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries")
        const countries = apiData.data;
        //console.log("Datos recuperados de la API:", countries);

        
      
        // Cuando se haga es dispatch, esta actions va al reducer, el reducer recibe y tiene que trabajar con ella
        dispatch({type: GET_COUNTRIES, payload: countries });
        

    };
};


export const getCountryById = (id) => {
    return async function(dispatch) {
        //console.log("Valor de id antes de la solicitud:", idPais); 
        
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
        const country = apiData.data;
       //console.log("Datos recuperados de la API:", country);
        dispatch({ type: GET_COUNTRY_BY_ID, payload: country });
    };
};






//Aqui pido el detalle del usuario
// export const getCountrie = (id) =>{
//     return async function (dispatch) {
//       const apiData = await axios.get(`http://localhost:5000/countries/${id}`

//       );
//         const countrie = apiData.data;
//         dispatch({type:"GET_COUNTRIES", payload: countrie})
//     };
// };

// export const filterBySource = () => {
//     dispatch({type: "FILTER_BY_SOURCE"});
// }