import Card from "../Card/Card"
import styles from"./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
    
    //Hook que se utiliza para extraer datos del sotore de Redux, en un componente funcional de react
    const countries = useSelector(state=>state.countries)
    

    return(
        <div className={styles.Container}>
             {countries.map(country=>{
                return <Card
                key={country.ID} 
                    ID={country.ID}
                    Nombre={country.Nombre}
                    FlagImage={country.FlagImage}
                    Continente={country.Continente}
                    Capital={country.Capital}
                    Subregion={country.Subregion}
                    Area={country.Area}
                    Poblacion={country.Poblacion}
                 />
             })}
        </div>
    )
}

export default CardsContainer