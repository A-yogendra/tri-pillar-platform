import BottomNav from "../components/BottomNav";
import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function Home() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    education: 0,
    health: 0,
    finance: 0,
  });

  /* 🔹 Fetch entries stats */
  useEffect(() => {
    const fetchStats = async () => {
      const res = await API.get("/api/entries");

      const counts = { education: 0, health: 0, finance: 0 };
      res.data.forEach((e) => counts[e.pillar]++);

      setStats(counts);
    };

    fetchStats();
  }, []);

  /* 🔹 Fetch logged-in user */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/api/users/me");
        setUser(res.data);
      } catch (err) {
        console.log("User fetch failed");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white pb-28">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full border-2 border-primary overflow-hidden bg-primary/20 flex items-center justify-center font-extrabold">
              {user?.avatar ? (
                <img
                  src={`http://localhost:5000${user.avatar}`}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-background-dark">
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </span>
              )}
            </div>

            <div>
              <h2 className="text-xl font-extrabold">
                Good Morning, {user ? user.name : "Loading..."}
              </h2>
              <p className="text-xs text-slate-500">
                {user ? user.email : ""}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="size-10 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-400"
          >
            🚪
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="px-4 py-6">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* ================= ACTIVITY GRAPH ================= */}
          <section className="bg-white dark:bg-[#19332b] p-5 rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="font-bold mb-4">📊 My Activity</h3>

            {/* 🔑 FIXED HEIGHT CONTAINER */}
            <div className="h-[240px]">
              <Bar
                data={{
                  labels: ["Education", "Health", "Finance"],
                  datasets: [
                    {
                      data: [
                        stats.education,
                        stats.health,
                        stats.finance,
                      ],
                      backgroundColor: ["#22c55e", "#10b981", "#0ea5e9"],
                      borderRadius: 8,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: { stepSize: 1 },
                    },
                  },
                }}
              />
            </div>
          </section>

          {/* ================= EDUCATION + FINANCE ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* EDUCATION */}
            <section className="md:col-span-2 bg-white dark:bg-[#19332b] p-5 rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold flex items-center gap-2">🎓 Education</h3>
                <span className="text-xs text-primary font-bold">
                  2 classes today
                </span>
              </div>

              <p className="text-xs uppercase text-primary font-bold mb-1">
                Next Class
              </p>
              <h4 className="text-lg font-bold">Advanced Mathematics</h4>
              <p className="text-sm text-slate-500">Room 402 • 10:00 AM</p>

              <button className="mt-3 bg-primary text-[#11221c] font-bold px-4 py-2 rounded-xl text-sm">
                Join Link
              </button>

              {/* PROGRESS */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Assignment Progress</span>
                  <span className="text-primary font-bold">3 / 5 (60%)</span>
                </div>

                <div className="h-2.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full">
                  <div className="h-full bg-primary rounded-full w-[60%]" />
                </div>
              </div>
            </section>

            {/* FINANCE */}
            <section className="bg-white dark:bg-[#19332b] p-5 rounded-2xl border border-slate-200 dark:border-white/10">
              <h3 className="font-bold mb-2">💳 Finance</h3>

              <p className="text-xs text-slate-500 uppercase mb-1">
                Budget Remaining
              </p>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-extrabold">₹450</span>
                <span className="text-sm text-slate-400">of ₹1500</span>
              </div>

              <div className="h-2.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full mb-4">
                <div className="h-full bg-primary rounded-full w-[30%]" />
              </div>

              <div className="flex justify-between text-sm">
                <span>Recent: Coffee Shop</span>
                <span className="text-red-400 font-bold">-₹50</span>
              </div>
            </section>
          </div>

          {/* ================= HEALTH ================= */}
          <section>
            <h3 className="font-bold mb-4">💚 Health & Wellness</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* STEPS */}
              <div className="bg-white dark:bg-[#19332b] p-5 rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">🏃 Steps</span>
                  <span className="text-primary font-bold">64%</span>
                </div>

                <div className="text-3xl font-extrabold mb-2">
                  6,420 <span className="text-sm text-slate-400">/ 10k</span>
                </div>

                <div className="h-2.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full">
                  <div className="h-full bg-primary rounded-full w-[64%]" />
                </div>
              </div>

              {/* HYDRATION */}
              <div className="bg-white dark:bg-[#19332b] p-5 rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">💧 Hydration</span>
                  <span className="text-blue-400 font-bold">48%</span>
                </div>

                <div className="text-3xl font-extrabold mb-2">
                  1.2 <span className="text-sm text-slate-400">/ 2.5L</span>
                </div>

                <div className="h-2.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full">
                  <div className="h-full bg-blue-400 rounded-full w-[48%]" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNav active="home" />
    </div>
  );
}
