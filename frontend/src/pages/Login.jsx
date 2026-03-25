import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f5] p-4">
      <div className="w-full max-w-md">
        <form className="bg-white rounded-2xl shadow-2xl shadow-red-900/10 p-8 border border-red-50" onSubmit={handleSubmit}>
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#800000] rounded-xl mb-4 shadow-lg shadow-red-900/20">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#4a0404] tracking-tight">Welcome Back</h2>
            <p className="text-red-900/60 mt-2 text-sm">Please enter your details to sign in</p>
          </div>

          <div className="space-y-5">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-red-100 bg-red-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-red-100 bg-red-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#800000]/20 focus:border-[#800000]"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button className="w-full mt-8 bg-[#800000] hover:bg-[#600000] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-900/30">
            Sign In
          </button>

          <p className="text-center mt-6 text-sm text-red-900/60">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="text-[#800000] font-bold cursor-pointer hover:underline">
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}