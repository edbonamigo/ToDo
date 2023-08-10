/* eslint-disable react/prop-types */
import styles from "./TaskLine.module.css";

export function TaskLine({ id, text, completed, onDeleteTask }) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <li key={id} className={`${styles.task}`}>
      <input type="checkbox" className={styles.checkmark} />
      <p className={styles.text}>{text}</p>
      <button
        className={styles.delete}
        onClick={handleDeleteTask}
        title="Delete"
      ></button>
    </li>
  );
}
