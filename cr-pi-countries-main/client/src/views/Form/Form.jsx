import { useState } from "react";



const Form = () => {

    const form = useState({
        Nombre:"",
        Continente:"",
        
    })

    return (
        <form> 
            
            <div>
               <label>Nombre</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>FlagImage</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>Continente</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>Capital</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>Subregion</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>Area</label> 
               <input type="texto"></input>
            </div>

            <div>
               <label>Poblacion</label> 
               <input type="texto"></input>
            </div>
        </form> 
    )
}

export default Form;

// ID={country.ID}
// Nombre={country.Nombre}
// FlagImage={country.FlagImage}
// Continente={country.Continente}
// Capital={country.Capital}
// Subregion={country.Subregion}
// Area={country.Area}
// Poblacion={country.Poblacion}