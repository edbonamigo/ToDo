import plus from "./assets/plus.svg";
import clipboard from "./assets/clipboard.svg";

import { Header } from "./Components/Header";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Add a new task"
          />
          <button className={styles.buttonNew}>
            Create <img src={plus} alt="Plus" />
          </button>
        </form>

        <main>
          <header className={styles.info}>
            <div className={styles.infoCreated}>
              <h3>Created tasks</h3>
              <span>0</span>
            </div>
            <div className={styles.infoCompleted}>
              <h3>Completed</h3>
              <span>0</span>
            </div>
          </header>

          <ul className={styles.tasks}>
            <li className={styles.task}>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className={styles.delete} title="Delete"></button>
            </li>

            <li className={`${styles.task}`}>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className={styles.delete} title="Delete"></button>
            </li>

            <li className={`${styles.task} ${styles.completed}`}>
              <input type="checkbox" className={styles.checkbox} />
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className={styles.delete} title="Delete"></button>
            </li>
          </ul>

          <div className={styles.empty}>
            <img src={clipboard} alt="Clipboard" />
            <h2>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </h2>
            <h2>Crie tarefas e organize seus itens a fazer</h2>
          </div>
        </main>
      </div>
    </div>
  );
}
