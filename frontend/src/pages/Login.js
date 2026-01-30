import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API } from "../api/api";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // auto redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = jwtDecode(token);
      if (decoded.role === "admin") navigate("/admin");
      else navigate("/home");
    } catch {}
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);

      const decoded = jwtDecode(res.data.token);

      alert("✅ Login Success!");

      // 🔥 ROLE BASED REDIRECT
      if (decoded.role === "admin") navigate("/admin");
      else navigate("/home");

    } catch (err) {
      alert("❌ Login Failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1a16] px-4">
      <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-extrabold text-white mb-2">Login</h1>
        <p className="text-sm text-white/60 mb-6">
          Welcome back to Tri-Pillar
        </p>

        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 outline-none border border-white/10"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 outline-none border border-white/10"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-primary text-[#11221c] font-extrabold"
          >
            Login
          </button>

          <p className="text-center text-sm text-white/60">
            Don’t have an account?{" "}
            <Link className="text-primary font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
