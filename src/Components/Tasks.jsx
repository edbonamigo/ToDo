/* eslint-disable react/prop-types */
import clipboard from "../assets/clipboard.svg";
import styles from "./Tasks.module.css";

import { TaskAdd } from "./TaskAdd";
import { TasksHeader } from "./TasksHeader";
import { TaskLine } from "./TaskLine";

export function Tasks({ tasks }) {
  // States for tasks live here

  return (
    <main className={styles.tasks}>
      <TaskAdd />
      <TasksHeader />

      {tasks.length > 0 ? (
        <ul className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <TaskLine
                key={task.id}
                text={task.text}
                completed={task.completed}
              />
            );
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
