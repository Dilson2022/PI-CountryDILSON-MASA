import axios from "axios";

//ACCIONES DE FILTRADOS
export const SET_CONTINENT_FILTER = "SET_CONTINENT_FILTER";
export const SET_ACTIVITY_FILTER = "SET_ACTIVITY_FILTER";
export const SET_SORT_FILTER = "SET_SORT_FILTER";

export const setContinentFilter = (continent) => ({
  type: SET_CONTINENT_FILTER,
  payload: continent,
});

export const setActivityFilter = (activity) => ({
  type: SET_ACTIVITY_FILTER,
  payload: activity,
});

export const setSortFilter = (sortBy) => ({
  type: SET_SORT_FILTER,
  payload: sortBy,
});


//ACCIONES DE PAISES
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";

// Este es el action create que retorna una funcion, que hace la peticion y la despacha
export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    const countries = apiData.data;
    //console.log("Datos recuperados de la API:", countries);

    // Cuando se haga es dispatch, esta actions va al reducer, el reducer recibe y tiene que trabajar con ella
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    //console.log("Valor de id antes de la solicitud:", id);

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
