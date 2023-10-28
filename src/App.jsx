import { configure } from "@testing-library/react";
import styles from "./App.module.css";
import Counter from "./components/counter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className={styles["App"]}>
        <h1>App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
