import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

// recibe props como  un objeto llamado data
const Card = ({ data }) => {
  //console.log("Data recibida en Card:", data);
  //console.log(data);
  const { ID, Nombre, FlagImage, Continente } = data;
  //console.log("Ruta de la imagen de la bandera:", FlagImage)
  return (
    <div className={styles.card}>
       <img
        src={FlagImage} 
        alt={Nombre}
        className={styles.flagImage}
      />
       

      <p>Nombre: {Nombre}</p>
      <p>Continente: {Continente}</p>
      <Link to={`/detail/${ID}`}>
        <button className={styles.linkButton}> + info</button>
      </Link>

      
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.string,
    Nombre: PropTypes.string,
    FlagImage: PropTypes.string,
    Continente: PropTypes.string,
    Capital: PropTypes.string,
    Subregion: PropTypes.string,
    Area: PropTypes.number,
    Poblacion: PropTypes.number,
  }).isRequired,
};

export default Card;
