import PropTypes from 'prop-types';
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';






// recibe props como  un objeto llamado data
const Card = ( {data} ) => {
    const {ID, Nombre, FlagImage, Continente } = data;


    
    return (
        <div className={styles.card}>
            <img className={styles.image} src={FlagImage} />
            <p>Nombre: {Nombre }</p>
            <p>Continente: {Continente }</p>
          <Link to={`/detail/${ID}`}  >
            <button className={styles.linkButton}> + detalle</button>
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
        Poblacion: PropTypes.number
    }).isRequired
};

export default Card;
