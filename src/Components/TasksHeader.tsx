import css from "./tasksHeader.module.css";

interface TasksHeaderProps {
  createdTasks: string;
  completedAndTotal: string;
}

export function TasksHeader({
  createdTasks,
  completedAndTotal,
}: TasksHeaderProps) {
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
