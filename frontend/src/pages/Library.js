import { useEffect, useState } from "react";
import { API } from "../api/api";
import BottomNav from "../components/BottomNav";

export default function Library() {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", note: "", file: null });
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/api/entries").then((res) => setEntries(res.data));
  }, []);

  /* =====================
     EDIT LOGIC
  ===================== */
  const startEdit = (entry) => {
    setEditingId(entry._id);
    setForm({ title: entry.title, note: entry.note || "", file: null });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: "", note: "", file: null });
  };

  const saveEdit = async (id) => {
    const data = new FormData();
    data.append("title", form.title);
    data.append("note", form.note);
    if (form.file) data.append("file", form.file);

    try {
      const res = await API.put(`/api/entries/${id}`, data);
      setEntries(entries.map((e) => (e._id === id ? res.data.entry : e)));
      cancelEdit();
    } catch {
      alert("❌ Update failed");
    }
  };

  /* =====================
     DELETE LOGIC ✅
  ===================== */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this entry permanently?")) return;

    try {
      await API.delete(`/api/entries/${id}`);
      setEntries(entries.filter((e) => e._id !== id));
    } catch {
      alert("❌ Delete failed");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-28 px-4 text-white">
      <div className="max-w-6xl mx-auto pt-10">
        <h1 className="text-2xl font-bold mb-6">📚 My Library</h1>
        <input
          type="text"
          placeholder="🔍 Search by title, note or pillar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg text-black"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries
  .filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.note?.toLowerCase().includes(search.toLowerCase()) ||
    item.pillar.toLowerCase().includes(search.toLowerCase())
  )
  .map((item) => (

            <div key={item._id} className="bg-[#19332b] p-4 rounded-xl">

              {/* ================= EDIT MODE ================= */}
              {editingId === item._id ? (
                <>
                  <input
                    className="w-full p-2 mb-2 text-black rounded"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />

                  <textarea
                    className="w-full p-2 mb-2 text-black rounded"
                    value={form.note}
                    onChange={(e) =>
                      setForm({ ...form, note: e.target.value })
                    }
                  />

                  <input
                    type="file"
                    className="mb-2"
                    onChange={(e) => {
                      if (item.fileUrl) {
                        const ok = window.confirm(
                          "This will replace the existing file. Continue?"
                        );
                        if (!ok) return;
                      }
                      setForm({ ...form, file: e.target.files[0] });
                    }}
                  />


                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(item._id)}
                      className="flex-1 bg-green-500 py-2 rounded font-bold"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-500 py-2 rounded font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                /* ================= VIEW MODE ================= */
                <>
                  <p className="text-xs text-primary uppercase">
                    {item.pillar}
                  </p>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-sm">{item.note}</p>

                  {item.fileUrl && (
                    <a
                      href={`http://localhost:5000${item.fileUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary text-sm underline"
                    >
                      View File
                    </a>
                  )}

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => startEdit(item)}
                      className="flex-1 bg-blue-500 py-2 rounded font-bold"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-red-500 py-2 rounded font-bold"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="library" />
    </div>
  );
}
