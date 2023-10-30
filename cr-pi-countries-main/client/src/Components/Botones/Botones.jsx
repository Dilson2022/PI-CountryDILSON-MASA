import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setContinentFilter,
  setActivityFilter,
  setSortFilter,
} from './actions';

const YourComponent = ({
  setContinentFilter,
  setActivityFilter,
  setSortFilter,
}) => {
  // Ejemplo de uso de setContinentFilter
  const handleFilterChange = (continent) => {
    setContinentFilter(continent);
    // Otras acciones necesarias aquí después de cambiar el filtro
  };

  return (
    <div>
      {/* Ejemplo de botón que utiliza handleFilterChange */}
      <button onClick={() => handleFilterChange('Europe')}>
        Filtrar por Europa
      </button>
    </div>
  );
};

YourComponent.propTypes = {
  setContinentFilter: PropTypes.func.isRequired,
  setActivityFilter: PropTypes.func.isRequired,
  setSortFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setContinentFilter,
  setActivityFilter,
  setSortFilter,
};

export default connect(null, mapDispatchToProps)(YourComponent);
