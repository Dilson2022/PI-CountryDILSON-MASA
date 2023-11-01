import Card from "../Card/Card"
import styles from"./CardsContainer.module.css"
import { useSelector } from "react-redux"


const CardsContainer = () => {
  const countries = useSelector(state => state.countriesData.countries);
  

  return (
    <div className={styles.Container}>
     {countries && countries.map(country => (
        
         <Card
         key={country.ID}
         data={{
           ID: country.ID,
           Nombre: country.Nombre,
           FlagImage: country.FlagImage,
           Continente: country.Continente,
           Capital: country.Capital,
           Subregion: country.Subregion,
           Area: country.Area || 0,
           Poblacion: country.Poblacion || 0
          }}
        />
      ))}

      
    </div>
  );
   }



export default CardsContainer