import { GET_COUNTRIES } from "./actions";

// Este es estado global
const initialState = {
    countries: [],
};

// Reduce recibe el estado que va a modificar,
 //recibe la action que se acaba de despachar, 
 //evalua la action.type, y me retorna un estado nuevo, 
 //en el que tenga las propiedades de ...state y 
 //dentro del objeto countries, sea igual a action.payload
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
         return {...state, countries: action.payload};
        default:
            return{...state };
    }
};

export default rootReducer;
