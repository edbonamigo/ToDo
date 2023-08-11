import { v4 as uuidv4 } from "uuid";
import clipboard from "../assets/clipboard.svg";
import css from "./toDos.module.css";

import React, { useState } from "react";

import { TaskCreate } from "./TaskCreate";
import { TasksHeader } from "./TasksHeader";
import { TaskLine } from "./TaskLine";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TASKS: Task[] = [
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
// add typescript
// elaborate beautiful readme
// extra: criar popup de desfazer ação de delete, com timeOut de 10s e keyListener 'ctrl+Z'

export function ToDos() {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [newText, setNewText] = useState<string>("");

  function sortCompletedToBottom(arr: Task[]) {
    return [...arr].sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });
  }

  function handleCreateNewTask(e: React.FormEvent) {
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

    const sortedTasks = sortCompletedToBottom(tasksWithToggledOne);

    setTasks(sortedTasks);
  }

  const createdTasks = tasks.length;
  const completedTaks = tasks.filter((task) => task.completed === true).length;
  const completedAndTotal = `${completedTaks} / ${createdTasks}`;

  return (
    <main className={css.todos}>
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
            <strong>You don't have any tasks registered yet.</strong>
          </h2>
          <h2>Create tasks and organize your to-do items.</h2>
        </div>
      )}
    </main>
  );
}
