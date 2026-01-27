import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API } from "../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/api/auth/register", { name, email, password });
      alert("✅ Registered Successfully! Please Login");
      navigate("/login");
    } catch (err) {
      alert("❌ Register Failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1a16] px-4">
      <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-extrabold text-white mb-2">
          Create Account
        </h1>
        <p className="text-sm text-white/60 mb-6">
          Tri-Pillar Student Platform
        </p>

        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 outline-none border border-white/10 focus:border-primary"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 outline-none border border-white/10 focus:border-primary"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 outline-none border border-white/10 focus:border-primary"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl bg-primary text-[#11221c] font-extrabold hover:opacity-90 transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-white/60">
            Already have an account?{" "}
            <Link className="text-primary font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
