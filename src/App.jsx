import styles from "./App.module.css";
import Users from "./Users";

function App() {
  const usr1 = {
    name: "Naveen",
    job: "Developer",
  };
  const usr2 = {
    name: "Bob",
    job: "Node.js Backend web developer",
  };

  return (
    <div className={styles["App"]}>
      <h1>App</h1>
      <h1>Users with props Destructuring</h1>

      <Users name={usr1.name} job={usr1.job} />

      <Users name={usr2.name} job={usr2.job} />
    </div>
  );
}

export default App;
