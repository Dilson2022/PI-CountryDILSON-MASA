import { Link } from "react-router-dom"
import "./NavBar.Module.css"

const NavBar = () => {
    return(
        <div className="mainContainer">
            <Link to="/home">home</Link> 
            <Link to="/create">form</Link> 
            {/* <Link to="/filter-by-continent">Filtrar por Continente: Europa</Link>
             <Link to="/filter-by-activity">Filtrar por Actividad: Senderismo</Link>
             <Link to="/sort-by-population">Ordenar por Población</Link> */}
        </div>
    )
}

export default  NavBar;