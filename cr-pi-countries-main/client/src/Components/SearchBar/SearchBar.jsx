import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortFilter, setContinentFilter } from "../../../src/redux/actions";

const FilterComponent = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesData.countries);
  const continents = [...new Set(countries.map(country => country.Continente))];
  const activities = [...new Set(countries.map(country => country.Actividad))];
  const [select3, setSelect3] = useState('');
  const [select4, setSelect4] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');

  const handlerFilterConti = (event) => {
    const selectedContinent = event.target.value;
    setSelect3(selectedContinent);
    dispatch(setContinentFilter(selectedContinent));
  };

  const handlerFilterActiv = (event) => {
    setSelect4(event.target.value);
    dispatch({ type: 'SET_ACTIVITY_FILTER', payload: event.target.value });
  };

  const handleSortByChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
    dispatch(setSortFilter(selectedSort));
  };

  const filteredCountries = select3 ? countries.filter(country => country.Continente === select3) : countries;
  const filteredByActivity = select4 !== 'ALL' ? filteredCountries.filter(country => country.Actividad === select4) : filteredCountries;

  return (
    <div>
      <label> Continente: </label>
      <select value={select3} className="" onChange={handlerFilterConti}>
        <option value="">Seleccionar</option>
        {continents.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label> Actividad Turística: </label>
      <select value={select4} className="" onChange={handlerFilterActiv}>
        <option value="">Seleccionar</option>
        {activities.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label>Ordenar por:</label>
      <select value={sortBy} onChange={handleSortByChange}>
        <option value="alphabetical">Alfabéticamente</option>
        <option value="population">Población</option>
      </select>

      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country.Nombre}</li>
        ))}
      </ul>

      <ul>
        {filteredByActivity.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
