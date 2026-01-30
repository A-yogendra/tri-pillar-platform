import { useEffect, useState } from "react";
import { API } from "../api/api";
import AdminLayout from "../components/AdminLayout";

export default function AdminLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await API.get("/api/admin/logs");
        setLogs(res.data);
      } catch (err) {
        console.log("Failed to fetch logs");
      }
    };

    fetchLogs();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-extrabold mb-6">📜 System Logs</h1>

      <div className="bg-white/10 rounded-xl overflow-hidden">
        {logs.length === 0 && (
          <p className="p-6 text-white/50">No logs yet</p>
        )}

        {logs.map((log) => (
          <div key={log._id} className="p-4 border-b border-white/10">
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
    </AdminLayout>
  );
}

