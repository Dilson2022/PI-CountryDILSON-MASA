import styles from "./Landing.module.css";

const Landing = () => {
  const handleIngresarClick = () => {
    window.location.href = "http://localhost:5173/home";
  };

  return (
    <div className={styles.container}>
      <h1>Bienvenido a mi proyecto</h1>
      <button onClick={handleIngresarClick}>Ingresar</button>
    </div>
  );
};

export default Landing;
