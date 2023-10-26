import Card from "../Card/Card"
import styles from"./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
    const countries = useSelector(state => state.countries);
  
    return (
      <div className={styles.Container}>
        {countries.map(country => (
          <Card
            key={country.cca3}
            data={{
              ID: country.cca3,
              Nombre: country.name.common,
              FlagImage: country.flags.svg,
              Continente: country.region,
              Capital: country.capital,
              Subregion: country.subregion,
              Area: country.area || 0,
              Poblacion: country.population || 0
            }}
          />
        ))}
      </div>
    );
  };
  

export default CardsContainer