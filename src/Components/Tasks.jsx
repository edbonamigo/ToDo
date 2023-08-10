/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import clipboard from "../assets/clipboard.svg";
import styles from "./Tasks.module.css";

import { useState } from "react";

import { TaskCreate } from "./TaskCreate";
import { TasksHeader } from "./TasksHeader";
import { TaskLine } from "./TaskLine";

const TASKS = [
  {
    id: uuidv4(),
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false,
  },
  {
    id: uuidv4(),
    text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: true,
  },
];

export function Tasks() {
  const [tasks, setTasks] = useState(TASKS);
  const [newText, setNewText] = useState("");

  function handleCreateNewTask(e) {
    e.preventDefault();
    const input = e.target.text;

    const newTask = {
      id: uuidv4(),
      text: input.value,
      completed: false,
    };

    setTasks([newTask, ...tasks]);

    setNewText("");
    input.focus();
  }

  return (
    <main className={styles.tasks}>
      <TaskCreate
        handleCreateNewTask={handleCreateNewTask}
        onTextChange={setNewText}
        newText={newText}
      />

      <TasksHeader />

      {tasks.length > 0 ? (
        <ul className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <TaskLine
                key={task.id}
                text={task.text}
                completed={task.completed}
              />
            );
          })}
        </ul>
      ) : (
        <div className={styles.empty}>
          <img src={clipboard} alt="Clipboard" />
          <h2>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </h2>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </div>
      )}
    </main>
  );
}
