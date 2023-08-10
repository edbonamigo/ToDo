/* eslint-disable react/prop-types */
import plus from "../assets/plus.svg";
import css from "./taskCreate.module.css";

export function TaskCreate({ handleCreateNewTask, onTextChange, newText }) {
  return (
    <form className={css.taskCreate} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="text"
        className={css.input}
        onChange={(e) => onTextChange(e.target.value)}
        value={newText}
        placeholder="Add a new task"
      />
      <button className={css.button} type="submit">
        Create <img src={plus} alt="Plus" />
      </button>
    </form>
  );
}
