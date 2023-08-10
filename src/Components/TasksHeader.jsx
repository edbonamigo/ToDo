/* eslint-disable react/prop-types */
import css from "./tasksHeader.module.css";

export function TasksHeader({ createdTasks, completedAndTotal }) {
  return (
    <header className={css.tasksHeader}>
      <div className={css.created}>
        <h3>Created tasks</h3>
        <span>{createdTasks}</span>
      </div>
      <div className={css.completed}>
        <h3>Completed</h3>
        <span>{completedAndTotal}</span>
      </div>
    </header>
  );
}
