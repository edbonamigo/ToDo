/* eslint-disable react/prop-types */
import styles from "./TasksHeader.module.css";

export function TasksHeader({ createdTasks, completedAndTotal }) {
  return (
    <header className={styles.tasksHeader}>
      <div className={styles.created}>
        <h3>Created tasks</h3>
        <span>{createdTasks}</span>
      </div>
      <div className={styles.completed}>
        <h3>Completed</h3>
        <span>{completedAndTotal}</span>
      </div>
    </header>
  );
}
