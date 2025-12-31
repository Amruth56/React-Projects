import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../api/todo";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

export default function Todos() {
  const token = useAuthStore((s) => s.token);
  const qc = useQueryClient();
  const [title, setTitle] = useState("");

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
          createMut.mutate({ title, token });
          setTitle("");
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button>Add</button>
      </form>

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
          {t.title}
          <button onClick={() => deleteMut.mutate({ id: t._id, token })}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
