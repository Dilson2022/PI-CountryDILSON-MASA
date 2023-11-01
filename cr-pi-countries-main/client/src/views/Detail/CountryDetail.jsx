import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryById } from "../../redux/actions";// Asegúrate de reemplazar la ruta correcta

const CountryDetail = () => {
    const { id} = useParams(); // Asegúrate de que el nombre sea el mismo que el especificado en la ruta
    const dispatch = useDispatch();
    const selectedCountry = useSelector(state => state.countriesData.selectedCountry);

    useEffect(() => {
        //console.log("Valor de idPais antes de la solicitud:", id); // Agrega este registro para verificar el valor de idPais
        dispatch(getCountryById(id)); // Asegúrate de que idPais esté presente y sea un valor válido
    }, [dispatch, id]);

    if (!selectedCountry) {
        return <div>País no encontrado</div>;
    }

    const { ID, Nombre, FlagImage, Continente, Capital, Subregion, Area, Poblacion } = selectedCountry;
    
    return (
        <div>
            <p>ID: {ID}</p>
            <p>Nombre: {Nombre}</p>
            <img src={FlagImage} alt="Bandera" />
            <p>Continente: {Continente}</p>
            <p>Capital: {Capital}</p>
            {Subregion && <p>Subregión: {Subregion}</p>}
            {Area && <p>Área: {Area}</p>}
            <p>Población: {Poblacion}</p>
        </div>
    );
};

export default CountryDetail;
