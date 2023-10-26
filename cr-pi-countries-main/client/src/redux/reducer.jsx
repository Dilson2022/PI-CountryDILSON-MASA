import { GET_COUNTRIES, GET_COUNTRY_BY_ID } from "./actions";

// Estos son los estados globales 
const initialState = {
    countries: [],
    selectedCountry: null,
};

// Reduce recibe el estado que va a modificar,
 //recibe la action que se acaba de despachar, 
 //evalua la action.type, y me retorna un estado nuevo, 
 //en el que tenga las propiedades de ...state y 
 //dentro del objeto countries, sea igual a action.payload
 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES:
        return { ...state, countries: action.payload };
      case GET_COUNTRY_BY_ID:
        console.log("Datos del país obtenidos:", action.payload);
        return { ...state, selectedCountry: action.payload };
      default:
        return state;
    }
  };

export default rootReducer;
