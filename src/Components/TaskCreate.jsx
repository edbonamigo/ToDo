/* eslint-disable react/prop-types */
import { PlusCircle } from "phosphor-react";
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
      <button
        className={css.button}
        type="submit"
        disabled={newText.length === 0}
      >
        Create
        <PlusCircle weight="light" size={24} />
      </button>
    </form>
  );
}
