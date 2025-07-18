import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function register({ username, email, password }) {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });
    return res.data;
  } catch (err) {
    return err.response?.data || { message: "Registration failed" };
  }
}

export async function login({ email, password }) {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    return res.data;
  } catch (err) {
    return err.response?.data || { message: "Login failed" };
  }
}

export async function getProtected(token) {
  try {
    const res = await axios.get(`${API_URL}/auth/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err.response?.data || { message: "Failed to fetch protected data" };
  }
}
