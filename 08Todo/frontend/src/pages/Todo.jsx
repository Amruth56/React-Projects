import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todo";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

export default function Todos() {
  const token = useAuthStore((s) => s.token);
  const qc = useQueryClient();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [completed, setCompleted] = useState(false);

  const { data } = useQuery({
    queryKey: ["todos", token],
    queryFn: fetchTodos,
    enabled: !!token
  });

  const createMut = useMutation({
    mutationFn: createTodo,
    onSuccess: () => qc.invalidateQueries(["todos"])
  });

  const updateMut = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => qc.invalidateQueries(["todos"])
  });

  const deleteMut = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => qc.invalidateQueries(["todos"])
  });

  return (
    <div>
      <h2>Todos</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMut.mutate({
            title,
            priority,
            completed,
            token
          });
          setTitle("");
          setPriority("low");
          setCompleted(false);
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          required
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completed
        </label>

        <button>Add</button>
      </form>

      <hr />

      {data?.todos?.map((t) => (
        <div key={t._id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() =>
              updateMut.mutate({
                id: t._id,
                data: { completed: !t.completed },
                token
              })
            }
          />

          <strong>{t.title}</strong> — {t.priority}

          <select
            value={t.priority}
            onChange={(e) =>
              updateMut.mutate({
                id: t._id,
                data: { priority: e.target.value },
                token
              })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button onClick={() => deleteMut.mutate({ id: t._id, token })}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
