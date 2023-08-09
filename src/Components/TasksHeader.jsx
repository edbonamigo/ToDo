import styles from "./TasksHeader.module.css";

export function TasksHeader() {
  return (
    <header className={styles.tasksHeader}>
      <div className={styles.created}>
        <h3>Created tasks</h3>
        <span>0</span>
      </div>
      <div className={styles.completed}>
        <h3>Completed</h3>
        <span>0</span>
      </div>
    </header>
  );
}
