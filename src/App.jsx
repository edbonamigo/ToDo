import { v4 as uuidv4 } from "uuid";
import logo from "./assets/Logo.svg";
import styles from "./App.module.css";

import { Tasks } from "./Components/Tasks";

const TASKS = [
  {
    id: uuidv4(),
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: true,
  },
];

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo todo" />
      </header>

      <Tasks tasks={TASKS} />
    </div>
  );
}

export default App;
