/* eslint-disable react/prop-types */
import plus from "../assets/plus.svg";
import styles from "./TaskCreate.module.css";

export function TaskCreate({ handleCreateNewTask, onTextChange, newText }) {
  return (
    <form className={styles.TaskCreate} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="text"
        className={styles.input}
        onChange={(e) => onTextChange(e.target.value)}
        value={newText}
        placeholder="Add a new task"
      />
      <button className={styles.button} type="submit">
        Create <img src={plus} alt="Plus" />
      </button>
    </form>
  );
}
