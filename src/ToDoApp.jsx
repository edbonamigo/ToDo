import logo from "./assets/Logo.svg";
import css from "./ToDoApp.module.css";

import { ToDos } from "./Components/ToDos";

function ToDoApp() {
  return (
    <div>
      <header className={css.header}>
        <img src={logo} alt="Logo ToDo" />
      </header>

      <ToDos />
    </div>
  );
}

export default ToDoApp;
