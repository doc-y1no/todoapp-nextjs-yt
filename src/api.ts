import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch('http://localhost:3001/tasks', {
      cache: "no-store", }); //SSR
    const todos = res.json();

  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch('http://localhost:3001/tasks', {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
});
  const newTodo = res.json();

return newTodo;
};

export const editTodo = async (id: String, newText: String): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "Put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
});
  const updatedTodo = res.json();

return updatedTodo;
};

export const deleteTodo = async (id: String): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
});
  const deleteTodo = res.json();

return deleteTodo;
};
