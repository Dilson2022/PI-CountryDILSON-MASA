import { Link } from "react-router-dom"
import "./NavBar.Module.css"

const NavBar = () => {
    return(
        <div className="mainContainer">
            <Link to="/home">HOME</Link> 
            <Link to="/create">FORM</Link> 
        </div>
    )
}

export default  NavBar;