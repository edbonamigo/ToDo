import { PlusCircle } from "phosphor-react";
import css from "./taskCreate.module.css";

interface TaskCreateProps {
  newText: string;
  onTextChange: (text: string) => void;
  handleCreateNewTask: (event: React.FormEvent) => void;
}

export function TaskCreate({
  newText,
  onTextChange,
  handleCreateNewTask,
}: TaskCreateProps) {
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
        title={newText.length === 0 ? "Type something" : ""}
      >
        <span>Create</span>
        <PlusCircle weight="light" size={24} />
      </button>
    </form>
  );
}
