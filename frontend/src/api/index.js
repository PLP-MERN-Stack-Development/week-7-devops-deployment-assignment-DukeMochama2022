const API_URL = import.meta.env.VITE_API_URL 

export async function register({ username, email, password }) {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getProtected(token) {
  const res = await fetch(`${API_URL}/api/auth/protected`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
