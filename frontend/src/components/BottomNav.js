import { Link, useNavigate } from "react-router-dom";
import { getRole } from "../utils/getRole";



export default function BottomNav({ active = "home" }) {
  // ✅ Hooks MUST be at top
  const navigate = useNavigate();
  const role = getRole();
  if (role === "admin") return null;
  const token = localStorage.getItem("token");
  if (!token) return null;

  const tabClass = (name) =>
    `flex flex-col items-center gap-1 ${
      active === name
        ? "text-primary"
        : "text-slate-400 dark:text-white/40"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="w-full bg-white/90 dark:bg-[#10221c]/90 backdrop-blur-xl border-t border-slate-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 pb-8 pt-3 flex justify-between items-center relative">

          <Link to="/home" className={tabClass("home")}>
            <span className="text-[24px]">🏠</span>
            <span className="text-[10px] font-bold">Home</span>
          </Link>

          <Link to="/education" className={tabClass("education")}>
            <span className="text-[24px]">🎓</span>
            <span className="text-[10px] font-medium">Learn</span>
          </Link>

          <Link to="/health" className={tabClass("health")}>
            <span className="text-[24px]">💚</span>
            <span className="text-[10px] font-medium">Health</span>
          </Link>

          {/* CENTER ADD BUTTON */}
          <div className="relative -top-6">
            <button
              onClick={() => navigate("/add")}
              className="size-14 rounded-full bg-primary text-[#11221c] shadow-lg shadow-primary/30 flex items-center justify-center text-3xl font-bold active:scale-95 transition"
            >
              +
            </button>
          </div>

          <Link to="/library" className={tabClass("library")}>
            <span className="text-[24px]">📚</span>
            <span className="text-[10px] font-medium">Library</span>
          </Link>

          <Link to="/finance" className={tabClass("finance")}>
            <span className="text-[24px]">💳</span>
            <span className="text-[10px] font-medium">Wallet</span>
          </Link>

          <Link to="/profile" className={tabClass("profile")}>
            <span className="text-[24px]">👤</span>
            <span className="text-[10px] font-medium">Profile</span>
          </Link>

        </div>
      </div>
    </nav>
  );
}

