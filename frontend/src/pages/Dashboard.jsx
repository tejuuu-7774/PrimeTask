import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchTasks = async () => {
      try {
        const res = await API.get("/tasks");
        if (!ignore) {
          setTasks(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();

    return () => {
      ignore = true;
    };
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await API.post("/tasks", { title });
    setTitle("");

    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);

    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="flex gap-2 mb-6">
        <input
          className="border p-2 rounded w-64"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md space-y-2">
        {tasks.map((t) => (
          <div
            key={t._id}
            className="bg-white p-3 rounded shadow flex justify-between"
          >
            <span>{t.title}</span>
            <button
              onClick={() => deleteTask(t._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}