/* eslint-disable react/prop-types */
import styles from "./TaskLine.module.css";

export function TaskLine({ id, text, completed }) {
  return (
    <li key={id} className={`${styles.task}`}>
      <input type="checkbox" className={styles.checkmark} checked={completed} />
      <p className={styles.text}>{text}</p>
      <button className={styles.delete} title="Delete"></button>
    </li>
  );
}
