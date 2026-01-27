import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000",  // ✅ keep only this
});

// automatically attach token (if exists)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

