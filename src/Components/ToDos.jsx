/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import clipboard from "../assets/clipboard.svg";
import css from "./toDos.module.css";

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

// TODO:
// disable create if input empty

// reorder tasks when completing task
// elaborate beautiful readme
// improve transition of checkmark
// criar popup de desfazer ação de delete, com timeOut de 10s e keyListener 'ctrl+Z'

export function ToDos() {
  const [tasks, setTasks] = useState(TASKS);
  const [newText, setNewText] = useState("");

  function handleCreateNewTask(e) {
    e.preventDefault();
    const textInput = e.target.text;

    const newTask = {
      id: uuidv4(),
      text: textInput.value,
      completed: false,
    };

    setTasks([newTask, ...tasks]);

    setNewText("");
    textInput.focus();
  }

  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function toggleComplete(id) {
    const tasksWithToggledOne = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(tasksWithToggledOne);
  }

  const createdTasks = tasks.length;
  const completedTaks = tasks.filter((task) => task.completed === true).length;
  const completedAndTotal = `${completedTaks} / ${createdTasks}`;

  return (
    <main className={css.tasks}>
      <TaskCreate
        handleCreateNewTask={handleCreateNewTask}
        onTextChange={setNewText}
        newText={newText}
      />

      <TasksHeader
        createdTasks={createdTasks}
        completedAndTotal={completedAndTotal}
      />

      {tasks.length > 0 ? (
        <ul className={css.tasks}>
          {tasks.map((task) => {
            return (
              <TaskLine
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
                onDeleteTask={deleteTask}
                onToggleCompleted={toggleComplete}
              />
            );
          })}
        </ul>
      ) : (
        <div className={css.empty}>
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
