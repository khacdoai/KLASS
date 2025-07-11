import type { Task } from "../types";

const baseUrl = "https://server.aptech.io";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
};

export const login = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
};

export const getTasks = async () => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: "GET",
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const data = await response.json();
  return data;
};

export const createTask = async (task: Task) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  const data = await response.json();
  return data;
};

export const updateTask = (id: number, task: Task) => {
  return fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(task),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update task");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error updating task:", error);
      throw error;
    });
};

export const getTasksByID = async (id: number) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: "GET",
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }

  const data = await response.json();
  return data;
};
