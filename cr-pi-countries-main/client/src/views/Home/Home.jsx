import CardsContainer from "../../Components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";


const Home = () => {

    const dispatch = useDispatch(); 

    // Esta funcion se ejecuta,, cuando el componente se monta o cuando cambia algun array de dependencia 
    useEffect(() =>{
        dispatch(getCountries());
    },[dispatch])

    // cuando se monta, que haga el dispatch
    //useEffect() manejo el ciclo de vida, de este componente para poder decirle que haga algo cuando se monte
    // que haga el useDispatch


    return (
        <> 
        <h1>Esta es la vista de Home</h1>
        <CardsContainer />
        </> 
    )
}

export default Home;

//CardContainer, mira al estado global


// se monta home, cuanod se monta se dispara el useEffect, el useEffect hace el despacho. esto hace que se ejecute la esta accion 
// export const getCountries = () => {
//     return async function(dispatch) {
//         const apiData = await axios.get("http://localhost:5000/countries")
//         const countries = apiData.data;

//         // Cuando se haga es dispatch, esta actions va al reducer, el reducer recibe y tiene que trabajar con ella
//         dispatch({type: GET_COUNTRIES, payload: countries });
        

//     };
// };

// esta retorna la funcion, el thunkmiddleware, 
// garra esta funcion, la ejecuta, hace el dispatch y 
// al hacer el dispatch esta info 
// dispatch({type: GET_COUNTRIES, payload: countries }); 
// va al reducer, el reduce recibe la action, 
// evalua la action.type, y entonces crea un estado nuevo, 
// que es igual al estado anterior con esta modificacion
//  countries: action.payload 
// el array de dependencia [var1] es donde yo pongo, 
//en el caso en que surja algun cambio en esta variable 
//esta [var1] se vuelve a ejecutar