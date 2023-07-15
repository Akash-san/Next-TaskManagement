

import { ITask } from "./types/tasks";
// import fetch from "node-fetch";

const baseUrl = "http://localhost:3001/task";

export const getAllTask = async (): Promise<ITask[]> => {
  const res = await fetch(baseUrl, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
};

export const addTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });
  const newTask = await res.json();
  return newTask;
};

export const editTask = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  const updatedTask = await res.json();
  return updatedTask;
};

export const deleteTask = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};
