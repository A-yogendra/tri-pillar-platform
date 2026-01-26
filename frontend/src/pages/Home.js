import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-3">
        <div className="max-w-[430px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="size-10 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center text-background-dark font-extrabold">
                Y
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Good Morning, Yogendra
                </h2>
                <p className="text-xs text-slate-500 dark:text-[#92c9b7]">
                  Monday • Tri-Pillar Dashboard
                </p>
              </div>
            </div>

            {/* Notification */}
            <button className="size-10 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              🔔
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 space-y-6">
        <div className="max-w-[430px] mx-auto space-y-6">
          {/* Education */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                🎓 <span>Education</span>
              </h3>
              <span className="text-xs font-medium text-primary">
                2 classes today
              </span>
            </div>

            <div className="bg-white dark:bg-[#19332b] rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 p-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-lg bg-primary/10 shrink-0 flex items-center justify-center text-3xl">
                  📘
                </div>

                <div className="flex flex-col justify-between grow">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-primary">
                      Next Class
                    </p>
                    <h4 className="font-bold text-base leading-tight">
                      Advanced Mathematics
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-[#92c9b7]">
                      Room 402 • 10:00 AM
                    </p>
                  </div>

                  <button className="bg-primary text-[#11221c] text-xs font-bold py-1.5 px-3 rounded-lg w-fit mt-2">
                    Join Link
                  </button>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-medium">Assignment Progress</p>
                  <p className="text-xs font-bold text-primary">3 / 5</p>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-[#326755] rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[60%]" />
                </div>
              </div>
            </div>
          </section>

          {/* Health */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                💚 <span>Health & Wellness</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Steps */}
              <div className="bg-white dark:bg-[#19332b] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary text-sm">🏃</span>
                  <span className="text-xs font-bold uppercase text-slate-500 dark:text-[#92c9b7]">
                    Steps
                  </span>
                </div>
                <div className="mb-1">
                  <span className="text-2xl font-extrabold">6,420</span>
                  <span className="text-xs text-slate-400"> / 10k</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[64%]" />
                </div>
              </div>

              {/* Hydration */}
              <div className="bg-white dark:bg-[#19332b] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 text-sm">💧</span>
                  <span className="text-xs font-bold uppercase text-slate-500 dark:text-[#92c9b7]">
                    Hydration
                  </span>
                </div>
                <div className="mb-1">
                  <span className="text-2xl font-extrabold">1.2</span>
                  <span className="text-xs text-slate-400"> / 2.5L</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-[#326755] rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full w-[48%]" />
                </div>
              </div>
            </div>
          </section>

          {/* Finance */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                💳 <span>Finance</span>
              </h3>
              <span className="text-xs font-medium text-slate-500 dark:text-[#92c9b7]">
                Weekly View
              </span>
            </div>

            <div className="bg-white dark:bg-[#19332b] rounded-xl border border-slate-100 dark:border-white/5 p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />

              <div className="relative z-10">
                <p className="text-xs font-bold text-slate-500 dark:text-[#92c9b7] uppercase mb-1">
                  Budget Remaining
                </p>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold">₹450</span>
                  <span className="text-sm text-slate-400">left of ₹1500</span>
                </div>

                <div className="h-3 w-full bg-slate-200 dark:bg-[#326755] rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-primary rounded-full w-[30%]" />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-slate-100 dark:bg-[#10221c] flex items-center justify-center">
                        ☕
                      </div>
                      <div>
                        <p className="font-bold">Recent: Coffee Shop</p>
                        <p className="text-[10px] text-slate-500">
                          Today, 8:15 AM
                        </p>
                      </div>
                    </div>

                    <span className="font-bold text-red-400">-₹50</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNav active="home" />
    </div>
  );
}
