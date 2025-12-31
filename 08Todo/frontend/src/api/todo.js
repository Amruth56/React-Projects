const BASE = "http://localhost:5000/api/todos";

export const fetchTodos = async ({ queryKey }) => {
  const [, token] = queryKey;

  const res = await fetch(BASE, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
};

export const createTodo = async ({ title , priority, completed,  token }) => {
  const res = await fetch(BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title, priority, completed })
  });

  if (!res.ok) throw new Error("Create failed");
  return res.json();
};

export const updateTodo = async ({ id, data, token }) => {
  await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
};

export const deleteTodo = async ({ id, token }) => {
  await fetch(`${BASE}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
};
