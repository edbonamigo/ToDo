import logo from "./assets/Logo.svg";
import styles from "./App.module.css";

import { Tasks } from "./Components/Tasks";

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo ToDo" />
      </header>

      <Tasks />
    </div>
  );
}

export default App;
