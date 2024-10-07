import type { Request, Response } from "express";
import type { Task } from "../types/task";

let tasks: Task[] = [];
let nextId = 1;

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTask: Task = {
    id: nextId++,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body, id };
  res.json(tasks[taskIndex]);
};

export const deleteTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
