import axios from "axios";


export  const GET_COUNTRIES = "GET_COUNTRIES";

// Este es el action create que retorna una funcion, que hace la peticion y la despacha
export const getCountries = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:5000/countries")
       
        const countries = apiData.data;

        // Cuando se haga es dispatch, esta actions va al reducer, el reducer recibe y tiene que trabajar con ella
        dispatch({type: GET_COUNTRIES, payload: countries });
        

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