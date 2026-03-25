import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const role = localStorage.getItem("role");

  useEffect(() => {
      let ignore = false;

      const fetchTasks = async () => {
        try {
          const res = await API.get("/tasks");
          if (!ignore) setTasks(res.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchTasks();
      if (role === "admin") {
        API.get("/test/admin").catch(() => {});
      }

      return () => {
        ignore = true;
      };
    }, [role]); 

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

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#fff5f5] p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#4a0404]">Task Center</h1>
            <p className="text-red-900/60 mt-1">Manage your daily priorities</p>
            {role === "admin" && (
              <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                Admin Access 👑
              </span>
            )}
          </div>
          <button onClick={logout} className="bg-[#800000] text-white px-4 py-2 rounded-xl">
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-50">
              <h3 className="text-[#630b0b] font-bold mb-4">New Task</h3>
              <input
                className="w-full px-4 py-3 rounded-xl border border-red-100 bg-red-50/30 focus:outline-none focus:ring-2 focus:ring-[#800000]/20"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task..."
              />
              <button
                onClick={addTask}
                className="w-full mt-3 bg-[#800000] text-white py-3 rounded-xl"
              >
                Add Task
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[#4a0404] font-bold">Tasks</h3>
              <span className="px-3 py-1 bg-red-100 text-[#800000] text-xs font-bold rounded-full">
                {tasks.length}
              </span>
            </div>

            {tasks.map((t) => (
              <div
                key={t._id}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >
                <span>{t.title}</span>
                <button onClick={() => deleteTask(t._id)} className="text-red-500">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}