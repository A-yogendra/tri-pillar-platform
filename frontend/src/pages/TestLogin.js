import { useState } from "react";
import { API } from "../api/api"; // ✅ important

export default function TestLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });

      // ✅ Save token in browser
      localStorage.setItem("token", res.data.token);

      alert("✅ Login Success!");
      console.log("Logged in user:", res.data.user);
    } catch (err) {
      alert("❌ Login Failed: " + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-2xl font-bold">Test Login Page</h1>

      <input
        className="px-4 py-2 rounded text-black w-80"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="px-4 py-2 rounded text-black w-80"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-green-500 px-6 py-2 rounded font-bold"
      >
        Login
      </button>
      <button
  onClick={() => {
    localStorage.removeItem("token");
    alert("✅ Logged out (token removed)");
  }}
  className="bg-red-500 px-6 py-2 rounded font-bold"
>
  Logout
</button>

    </div>
  );
}
