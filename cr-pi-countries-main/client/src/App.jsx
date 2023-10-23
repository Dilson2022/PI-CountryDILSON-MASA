import {Home,Landing,Form,Detail} from "./views"
import {Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"


function App() {

  const location = useLocation();
  //console.log(location);

  return (
    <div className="App">
     {location.pathname !== "/" &&  <NavBar />}
     <Routes>
      <Route exact path="/" element= {<Landing/>}/>
      <Route path="/home" element= {<Home/>}/>
      <Route exact path="/detail" element= {<Detail/>}/>
      <Route exact path="/create" element= {<Form/>}/>
      </Routes>

      
    </div>
    
     
  )
}

export default App













// const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>