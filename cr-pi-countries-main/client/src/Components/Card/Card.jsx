import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

// recibe props como  un objeto llamado data
const Card = ({ data }) => {
  //console.log(data);
  const { ID, Nombre, flags, Continente } = data;
  //console.log(FlagImage);
  return (
    <div className={styles.card}>
       <img
        src= {`https://flagcdn.com/${ID}.png`} // Utiliza la ruta de la bandera específica de cada país
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
    flags: PropTypes.shape({
      png: PropTypes.string, // Asegúrate de que 'png' sea una cadena que represente la ruta de la bandera
      svg: PropTypes.string // Puedes agregar 'svg' si también estás utilizando la ruta SVG de la bandera
    }),
    Continente: PropTypes.string,
    Capital: PropTypes.string,
    Subregion: PropTypes.string,
    Area: PropTypes.number,
    Poblacion: PropTypes.number,
  }).isRequired,
};

export default Card;
