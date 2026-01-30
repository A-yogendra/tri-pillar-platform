import { useEffect, useState } from "react";
import { API } from "../api/api";
import AdminLayout from "../components/AdminLayout";

export default function AdminEntries() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    const res = await API.get("/api/admin/entries");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const deleteEntry = async (id) => {
    if (!window.confirm("Delete this entry?")) return;

    await API.delete(`/api/admin/entries/${id}`);
    fetchEntries();
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-extrabold mb-6">📁 User Entries</h1>

      <div className="bg-white/10 rounded-xl overflow-hidden">
        {entries.map((e) => (
          <div key={e._id} className="p-4 border-b border-white/10">
            <p className="font-bold">
              {e.userId?.name} — {e.title}
            </p>

            <p className="text-sm text-white/60">
              {e.pillar} | {e.note}
            </p>

            {e.fileUrl && (
              <a
                href={`http://localhost:5000${e.fileUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-sm"
              >
                Open File
              </a>
            )}

            <button
              onClick={() => deleteEntry(e._id)}
              className="ml-4 bg-red-500 px-3 py-1 rounded text-sm font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
