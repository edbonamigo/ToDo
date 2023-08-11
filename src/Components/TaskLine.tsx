import css from "./taskLine.module.css";
import { Circle, CheckCircle, Trash } from "phosphor-react";

interface TaskLineProps {
  id: string;
  text: string;
  completed: boolean;
  onDeleteTask: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}

export function TaskLine({
  id,
  text,
  completed,
  onDeleteTask,
  onToggleCompleted,
}: TaskLineProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleComplete() {
    onToggleCompleted(id);
  }

  return (
    <li
      key={id}
      className={`${css.taskLine} ${completed ? css.completed : ""}`}
    >
      <button className={css.checkmark} onClick={handleToggleComplete}>
        {!completed ? (
          <>
            <Circle className={css.circle} weight="light" size={24} />
            <Circle className={css.circleBg} weight="duotone" size={24} />
          </>
        ) : (
          <>
            <CheckCircle className={css.check} weight="fill" size={24} />
            <CheckCircle className={css.checkBg} weight="duotone" size={24} />
          </>
        )}
      </button>
      <p className={css.text}>{text}</p>
      <button className={css.delete} onClick={handleDeleteTask} title="Delete">
        <Trash size={22} />
      </button>
    </li>
  );
}
