import { GET_COUNTRIES, GET_COUNTRY_BY_ID } from "./actions";
import { combineReducers } from "redux";
import { SET_ACTIVITY_FILTER, SET_CONTINENT_FILTER, SET_SORT_FILTER } from "./actions";


// Estos son los estados globales de paises
const initialState = {
    countries: [],
    selectedCountry: [],
};

// Reduce recibe el estado que va a modificar,
 //recibe la action que se acaba de despachar, 
 //evalua la action.type, y me retorna un estado nuevo, 
 //en el que tenga las propiedades de ...state y 
 //dentro del objeto countries, sea igual a action.payload
 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
       //console.log("Datos de países recibidos:", action.payload);
        return { ...state, countries: action.payload };
      case GET_COUNTRY_BY_ID:
       // console.log("Datos del país obtenidos:", action.payload);
        return { ...state, selectedCountry: action.payload };
      default:
        return state;
    }
  };


  //REDUCER DE FILTRADOS 
const initialFilters = {
  continent: "ALL",
  activity: "ALL",
  sortBy:"alphabetical",
};

const filtersReducer =(state = initialFilters, action) => {
  switch (action.type) {
    case SET_CONTINENT_FILTER:
      return {...state, continent: action.payload};
      case SET_ACTIVITY_FILTER:
        return {...state, activity: action.payload};
        case SET_SORT_FILTER:
          return{...state, sorBy: action.payload};
          default:
            return state;
  }
};

export default combineReducers ({
 filters: filtersReducer,
  countriesData: rootReducer,
}) 
  
  
