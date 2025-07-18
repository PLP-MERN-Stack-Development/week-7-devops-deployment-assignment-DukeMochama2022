import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const res = await login(form);
    if (res.token) {
      setMessage(res.message || "Login successful!");
      localStorage.setItem("token", res.token);
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setError(res.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="mb-2 p-2 w-full border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {message && <div className="mt-2 text-green-600">{message}</div>}
        {error && <div className="mt-2 text-red-600">{error}</div>}
      </form>
      <button
        className="mt-4 text-blue-500"
        onClick={() => navigate("/register")}
      >
        Don't have an account? Register
      </button>
    </div>
  );
}
