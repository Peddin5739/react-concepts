import styles from "./App.module.css";
import Destructuring from "./Destructuring";

function App() {
  return (
    <div className={styles["App"]}>
      <h1>App</h1>
      <h1>Destructuring</h1>

      <Destructuring />
    </div>
  );
}

export default App;
