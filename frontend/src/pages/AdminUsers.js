import { useEffect, useState } from "react";
import { API } from "../api/api";
import AdminLayout from "../components/AdminLayout";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/api/admin/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleRole = async (id) => {
    await API.put(`/api/admin/users/${id}/role`);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete user?")) return;
    await API.delete(`/api/admin/users/${id}`);
    fetchUsers();
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-extrabold mb-6">👥 Users</h1>

      <div className="bg-white/10 rounded-xl overflow-hidden">
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
    </AdminLayout>
  );
}
