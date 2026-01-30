import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  // 🔒 Auto redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white flex flex-col">
      
      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Tri-Pillar Life Management Platform
        </h1>

        <p className="max-w-2xl text-slate-600 dark:text-[#92c9b7] text-lg mb-8">
          A unified platform to manage your <b>Education</b>, <b>Health</b>, and
          <b> Finance</b> — all in one place.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/register")}
            className="bg-primary text-[#11221c] font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            🚀 Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/10 transition"
          >
            🔐 Login
          </button>

          <button
            onClick={() => navigate("/admin")}
            className="border border-red-500 text-red-400 font-bold px-6 py-3 rounded-xl hover:bg-red-500/10 transition"
          >
            🛡️ Admin Login
          </button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Education */}
        <div className="bg-white dark:bg-[#19332b] p-6 rounded-2xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">🎓 Education</h3>
          <p className="text-sm text-slate-600 dark:text-[#92c9b7]">
            Track courses, assignments, notes, files, and academic progress
            efficiently.
          </p>
        </div>

        {/* Health */}
        <div className="bg-white dark:bg-[#19332b] p-6 rounded-2xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">💚 Health</h3>
          <p className="text-sm text-slate-600 dark:text-[#92c9b7]">
            Monitor daily activity, hydration, wellness data, and healthy habits.
          </p>
        </div>

        {/* Finance */}
        <div className="bg-white dark:bg-[#19332b] p-6 rounded-2xl border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-2">💳 Finance</h3>
          <p className="text-sm text-slate-600 dark:text-[#92c9b7]">
            Manage expenses, budgets, uploads, and financial insights securely.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto text-center py-6 text-xs text-slate-400">
        © {new Date().getFullYear()} Tri-Pillar Platform • Built with MERN Stack
      </footer>
    </div>
  );
}
