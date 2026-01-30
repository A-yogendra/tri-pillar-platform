import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Bar } from "react-chartjs-2";
import AdminLayout from "../components/AdminLayout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [logs, setLogs] = useState([]);

  const fetchData = async () => {
    const u = await API.get("/api/admin/users");
    const s = await API.get("/api/admin/stats");
    const a = await API.get("/api/admin/analytics");
    const l = await API.get("/api/admin/logs");

    setUsers(u.data);
    setStats(s.data);
    setAnalytics(a.data);
    setLogs(l.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleRole = async (id) => {
    await API.put(`/api/admin/users/${id}/role`);
    fetchData();
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await API.delete(`/api/admin/users/${id}`);
    fetchData();
  };

  return (
    <AdminLayout>
      <div className="space-y-8">

        <h1 className="text-3xl font-extrabold">🛠 Admin Dashboard</h1>

        {/* Platform Stats */}
        {stats && (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold">Users</h3>
              <p className="text-3xl">{stats.totalUsers}</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold">Entries</h3>
              <p className="text-3xl">{stats.totalEntries}</p>
            </div>
          </div>
        )}

        {/* Analytics */}
        {analytics && (
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="font-bold mb-4">📊 Entry Analytics</h3>

            <div className="h-[300px]">
              <Bar
                data={{
                  labels: ["Education", "Health", "Finance"],
                  datasets: [
                    {
                      data: [
                        analytics.education,
                        analytics.health,
                        analytics.finance,
                      ],
                      backgroundColor: ["#22c55e", "#10b981", "#0ea5e9"],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                }}
              />
            </div>
          </div>
        )}

        {/* Users */}
        <div className="bg-white/10 rounded-xl overflow-hidden">
          <h2 className="p-4 font-bold border-b border-white/10">
            👥 User Management
          </h2>

          {users.map((u) => (
            <div
              key={u._id}
              className="flex justify-between items-center p-4 border-b border-white/10"
            >
              <div>
                <p className="font-bold">
                  {u.name} ({u.role})
                </p>
                <p className="text-sm text-white/60">{u.email}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleRole(u._id)}
                  className="bg-blue-500 px-3 py-1 rounded font-bold text-sm"
                >
                  Toggle Role
                </button>

                <button
                  onClick={() => deleteUser(u._id)}
                  className="bg-red-500 px-3 py-1 rounded font-bold text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Logs */}
        <div className="bg-white/10 rounded-xl">
          <h2 className="p-4 font-bold border-b border-white/10">
            📜 System Logs
          </h2>

          {logs.map((log) => (
            <div key={log._id} className="p-3 border-b border-white/10 text-sm">
              <p className="font-bold">
                {log.userId?.name || "System"} — {log.action}
              </p>
              <p className="text-white/60">{log.details}</p>
              <p className="text-xs text-white/40">
                {new Date(log.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}
