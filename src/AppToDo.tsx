import logo from "./assets/Logo.svg";
import css from "./AppToDo.module.css";

import { ToDos } from "./Components/ToDos";

function AppToDo() {
  return (
    <div>
      <header className={css.header}>
        <img src={logo} alt="Logo ToDo" />
      </header>

      <ToDos />
    </div>
  );
}

export default AppToDo;
