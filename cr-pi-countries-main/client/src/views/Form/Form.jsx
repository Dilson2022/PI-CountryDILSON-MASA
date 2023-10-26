
import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    Nombre: "",
    Dificultad: "",
    Duracion: "",
    Temporada: "",
    // Paises: []
  });

  // const [erros,setErrors] = useState({
  //   Nombre: "",
  //   Dificultad: "",
  //   Duracion: "",
  //   Temporada: "",
  // })

  const changeHandler = (event) =>{
   const property = event.target.name;
   const value = event.target.value;

   setForm({...form, [property]:value})
  }

 
  // const validate = (form) => {
  //   console.log("que me trae");

  // }
  
  return (
    <form >
      <div>
        <label>Nombre</label>
        <input type="text"  value={form.Nombre} onChange={changeHandler} name="Nombre"  />
      </div>

      <div >
        <label>Dificultad</label>
        <input type="text"  value={form.Dificultad}onChange={changeHandler} name="Dificultad" />
      </div>

      <div>
        <label>Duración</label>
        <input type="text" value={form.Duracion} onChange={changeHandler}  name="Duracion"/>
      </div>

      <div >
        <label>Temporada</label>
        <input type="text"  value={form.Temporada} onChange={changeHandler} name="Temporada"/>
      </div>

      <div className={styles.formGroup}>
        <label>Paises</label>
        <select multiple name="Paises" value={form.Paises}onChange={changeHandler}>
          <option value="pais1">Pais 1</option>
          <option value="pais2">Pais 2</option>
          <option value="pais3">Pais 3</option>
          {/* Agrega más opciones aquí según tus necesidades */}
        </select>
      </div>

      <button type="submit">Crear actividad turística</button>
    </form>
  );
};

export default Form;



