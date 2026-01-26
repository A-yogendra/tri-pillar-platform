import BottomNav from "../components/BottomNav";

export default function Health() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28">
      <div className="max-w-[430px] mx-auto">
        {/* Header */}
        <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-background-dark">
              Y
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Health & Wellness
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tri-pillar Student Management
              </p>
            </div>
          </div>

          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
            📅
          </button>
        </header>

        {/* Main */}
        <main className="pb-24">
          {/* Heading */}
          <div className="px-4 pt-6">
            <h3 className="tracking-tight text-2xl font-extrabold leading-tight">
              How are you feeling today?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Check in with your mental well-being
            </p>
          </div>

          {/* Mood Carousel */}
          <div className="flex w-full overflow-x-auto px-4 py-6">
            <div className="flex gap-4">
              {/* Active Mood */}
              <div className="flex flex-col items-center gap-2 w-16 cursor-pointer">
                <div className="w-14 h-14 bg-primary/20 flex items-center justify-center rounded-2xl border-2 border-primary shadow-lg shadow-primary/10 active:scale-90 transition">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-[12px] font-semibold">Radiant</p>
              </div>

              {/* Others */}
              {[
                { icon: "😌", label: "Calm" },
                { icon: "🥱", label: "Tired" },
                { icon: "😰", label: "Stressed" },
                { icon: "😔", label: "Low" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-2 w-16 cursor-pointer opacity-60"
                >
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 flex items-center justify-center rounded-2xl active:scale-90 transition">
                    <span className="text-2xl">{m.icon}</span>
                  </div>
                  <p className="text-[12px] font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Progress */}
          <div className="flex items-center justify-between px-4 pt-2">
            <h3 className="text-xl font-bold tracking-tight">Daily Progress</h3>
            <button className="text-primary text-sm font-bold">
              Edit Goals
            </button>
          </div>

          {/* Progress Cards */}
          <div className="grid grid-cols-1 gap-4 p-4">
            {/* Sleep */}
            <div className="flex items-center justify-between rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-indigo-400 flex items-center justify-center">
                  🌙
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Sleep Quality
                  </p>
                  <p className="text-xl font-bold">
                    7.5{" "}
                    <span className="text-xs text-slate-400 font-normal">
                      / 8h
                    </span>
                  </p>
                </div>
              </div>

              <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-full">
                +5%
              </span>
            </div>

            {/* Hydration */}
            <div className="flex items-center justify-between rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-sky-400 flex items-center justify-center">
                  💧
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Hydration
                  </p>
                  <p className="text-xl font-bold">
                    1.2{" "}
                    <span className="text-xs text-slate-400 font-normal">
                      / 2.0L
                    </span>
                  </p>
                </div>
              </div>

              <span className="text-rose-500 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded-full">
                -12%
              </span>
            </div>

            {/* Mindfulness */}
            <div className="flex items-center justify-between rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
                  🧘
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Mindfulness
                  </p>
                  <p className="text-xl font-bold">
                    10{" "}
                    <span className="text-xs text-slate-400 font-normal">
                      / 15m
                    </span>
                  </p>
                </div>
              </div>

              <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-full">
                On Track
              </span>
            </div>
          </div>

          {/* Tip Card */}
          <div className="px-4 py-2">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-sky-500/10 border border-primary/20 p-5 relative overflow-hidden">
              <div className="flex items-start gap-4 relative z-10">
                <div className="size-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm">
                  💡
                </div>
                <div className="flex-1">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                    Tip of the Day
                  </p>
                  <p className="text-sm font-semibold leading-relaxed">
                    Taking a 5-minute walk between study sessions can boost your
                    focus by 20%. Try a quick stretch now!
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 opacity-10 text-7xl">
                🧠
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Nav */}
        <BottomNav active="health" />
      </div>
    </div>
  );
}
