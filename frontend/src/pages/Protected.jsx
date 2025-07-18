import { useEffect, useState } from "react";
import { getProtected } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Protected() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Not authenticated");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }
    getProtected(token)
      .then((res) => {
        if (res.message) setMessage(res.message);
        else toast.error("Failed to fetch protected data");
      })
      .catch(() => toast.error("Failed to fetch protected data"));
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Protected Page</h2>
        {message && <div className="text-green-600">{message}</div>}
      </div>
      <button
        className="mt-4 text-blue-500"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
