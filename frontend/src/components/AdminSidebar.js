import { Link, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 min-h-screen bg-black/40 border-r border-white/10 p-6 space-y-6">
      <h2 className="text-xl font-extrabold text-white">🛠 Admin Panel</h2>

      <nav className="flex flex-col gap-3 text-white/80">
        <Link to="/admin" className="hover:text-primary">📊 Dashboard</Link>
        <Link to="/admin/users" className="hover:text-primary">👥 Users</Link>
        <Link to="/admin/analytics" className="hover:text-primary">📈 Analytics</Link>
        <Link to="/admin/logs" className="hover:text-primary">📜 Logs</Link>
      </nav>

      <button
        onClick={logout}
        className="mt-8 w-full bg-red-500/20 hover:bg-red-500/40 text-red-400 py-2 rounded font-bold"
      >
        🚪 Logout
      </button>
    </div>
  );
}
