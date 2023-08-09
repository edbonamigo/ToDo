/* eslint-disable react/prop-types */
import clipboard from "../assets/clipboard.svg";
import styles from "./Tasks.module.css";

import { TasksHeader } from "./TasksHeader";
import { TaskLine } from "./TaskLine";

export function Tasks({ tasks }) {
  return (
    <main className={styles.tasks}>
      <TasksHeader />

      {tasks.length > 0 ? (
        <ul className={styles.tasks}>
          {tasks.map(({ id, text, completed }) => {
            return <TaskLine key={id} text={text} completed={completed} />;
          })}
        </ul>
      ) : (
        <div className={styles.empty}>
          <img src={clipboard} alt="Clipboard" />
          <h2>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </h2>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </div>
      )}
    </main>
  );
}
