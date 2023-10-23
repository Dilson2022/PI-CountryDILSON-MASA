// Este es estado global
const initialState = {
    countries: [
        {
            "ID": "KEN",
            "Nombre": "Kenya",
            "FlagImage": "🇰🇪",
            "Continente": "{Africa}",
            "Capital": "{Nairobi}",
            "Subregion": "Eastern Africa",
            "Area": 580367,
            "Poblacion": 53771300
        },
        {
            "ID": "SMR",
            "Nombre": "San Marino",
            "FlagImage": "🇸🇲",
            "Continente": "{Europe}",
            "Capital": "{\"City of San Marino\"}",
            "Subregion": "Southern Europe",
            "Area": 61,
            "Poblacion": 33938
        },
        {
            "ID": "PYF",
            "Nombre": "French Polynesia",
            "FlagImage": "🇵🇫",
            "Continente": "{Oceania}",
            "Capital": "{Papeetē}",
            "Subregion": "Polynesia",
            "Area": 4167,
            "Poblacion": 280904
        },
    ],
}

const rootReducer = (state=initialState, action) => {

    switch(action.type){
        default:
            return{...state };
    }
};

export default rootReducer;