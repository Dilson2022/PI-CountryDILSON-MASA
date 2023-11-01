import { Home, Landing, Form, CountryDetail } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'



function App() {
  const location = useLocation();
  //console.log(location);

  const countryList = [
    // Aquí iría tu lista de países
  ];

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<CountryDetail countries={countryList} />} // Asegúrate de pasar la lista de países al componente CountryDetail
        />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
