import plus from "../assets/plus.svg";
import styles from "./TaskAdd.module.css";

export function TaskAdd() {
  return (
    <form className={styles.taskAdd}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a new task"
      />
      <button className={styles.button}>
        Create <img src={plus} alt="Plus" />
      </button>
    </form>
  );
}
