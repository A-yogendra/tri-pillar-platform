import { Link, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-[#0b1a16] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-black/40 border-r border-white/10 p-6 space-y-6">
        <h1 className="text-2xl font-extrabold">🛠 Admin</h1>

        <nav className="flex flex-col gap-3 text-sm font-bold">
          <Link to="/admin" className="hover:text-primary">Dashboard</Link>
          <Link to="/admin/users" className="hover:text-primary">Users</Link>
          <Link to="/admin/entries" className="hover:text-primary">Entries</Link>
          <Link to="/admin/logs" className="hover:text-primary">Logs</Link>
          <Link to="/admin/analytics" className="hover:text-primary">Analytics</Link>
        </nav>

        <button
          onClick={logout}
          className="mt-10 bg-red-500 px-4 py-2 rounded font-bold"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}

