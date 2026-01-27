import BottomNav from "../components/BottomNav";
import { useEffect, useRef, useState } from "react";
import { API } from "../api/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/api/users/me");
        setUser(res.data);
      } catch (err) {
        console.log("❌ Failed to fetch user:", err.response?.data?.message);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // ✅ upload avatar
  const handleAvatarChange = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await API.put("/api/users/avatar", formData);
      setUser({ ...user, avatar: res.data.avatar });
    } catch (err) {
      alert("❌ Avatar upload failed");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="flex items-center justify-between p-4 pb-2 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
          <button className="w-12 h-12 flex items-center justify-start text-xl">
            ←
          </button>

          <h2 className="text-lg font-bold flex-1 text-center tracking-tight">
            Profile & Settings
          </h2>

          <button className="w-12 h-12 flex items-center justify-end text-xl">
            ⚙️
          </button>
        </header>

        {/* Profile Section */}
        <section className="p-6 flex flex-col items-center gap-4">
          <div className="relative">

            {/* Avatar */}
            {user?.avatar ? (
              <img
                src={`http://localhost:5000${user.avatar}`}
                alt="avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/30"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-primary/30 flex items-center justify-center text-5xl">
                👤
              </div>
            )}

            {/* Edit Button */}
            <button
              onClick={() => fileRef.current.click()}
              className="absolute bottom-2 right-2 bg-primary text-background-dark p-2 rounded-full shadow-lg"
            >
              ✏️
            </button>

            {/* Hidden File Input */}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleAvatarChange(e.target.files[0])}
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold">
              {user ? user.name : "Loading..."}
            </h3>

            <p className="text-primary font-medium">
              {user ? user.email : ""}
            </p>

            <p className="text-primary/70 text-sm">
              Role: {user ? user.role : ""}
            </p>
          </div>
        </section>

        {/* Education Pillar */}
        <section className="px-4">
          <h4 className="text-lg font-bold pb-2 pt-2">Education Pillar</h4>

          <div className="rounded-xl overflow-hidden bg-slate-200 dark:bg-white/5">
            <div className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  🎓
                </div>
                <p className="font-medium">Academic Goals</p>
              </div>
              <span className="text-slate-400">›</span>
            </div>

            <div className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  📅
                </div>
                <p className="font-medium">Course Schedule</p>
              </div>
              <span className="text-slate-400">›</span>
            </div>
          </div>
        </section>

        {/* Health & Wellness */}
        <section className="px-4">
          <h4 className="text-lg font-bold pb-2 pt-6">Health & Wellness</h4>

          <div className="rounded-xl overflow-hidden bg-slate-200 dark:bg-white/5">
            <div className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  💚
                </div>
                <p className="font-medium">Vitals Sync</p>
              </div>
              <span className="text-slate-400">›</span>
            </div>
          </div>
        </section>

        {/* General */}
        <section className="px-4">
          <h4 className="text-lg font-bold pb-2 pt-6">General</h4>

          <div className="rounded-xl overflow-hidden bg-slate-200 dark:bg-white/5">
            <div className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  🔔
                </div>
                <p className="font-medium">Notification Preferences</p>
              </div>
              <span className="text-slate-400">›</span>
            </div>

            <div className="flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  🛡️
                </div>
                <p className="font-medium">Data Privacy</p>
              </div>
              <span className="text-slate-400">›</span>
            </div>
          </div>
        </section>

        {/* Logout */}
        <section className="p-8 flex flex-col items-center gap-4">
          <button
            onClick={handleLogout}
            className="w-full h-14 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl font-bold flex items-center justify-center gap-2 transition"
          >
            🚪 Log Out
          </button>

          <p className="text-slate-400 dark:text-slate-600 text-xs font-medium">
            Version 2.4.1 (Tri-pillar Unified)
          </p>
        </section>

        <BottomNav active="profile" />
      </div>
    </div>
  );
}
