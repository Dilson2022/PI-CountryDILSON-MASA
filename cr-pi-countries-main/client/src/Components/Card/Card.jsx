import PropTypes from 'prop-types';
import styles from "./Card.module.css";


// recibe props y muestra props
const Card = (props) => { 
    return (
        <div className={styles.card}>
            <p>ID={props.ID}</p>
            <p>Nombre={props.Nombre}</p>
            <p>FlagImage={props.FlagImage}</p>
            <p>Continente={props.Continente}</p>
            <p>Capital={props.Capital}</p>
            <p>Subregion={props.Subregion}</p>
            <p>Area={props.Area}</p>
            <p>Poblacion={props.Poblacion}</p>
        </div>
    );
};

Card.propTypes = {
    ID: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired,
    FlagImage: PropTypes.string.isRequired,
    Continente: PropTypes.string.isRequired,
    Capital: PropTypes.string.isRequired,
    Subregion: PropTypes.string.isRequired,
    Area: PropTypes.number.isRequired,
    Poblacion: PropTypes.number.isRequired
};

export default Card;
