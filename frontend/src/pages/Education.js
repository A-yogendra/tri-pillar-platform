import BottomNav from "../components/BottomNav";

export default function Education() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-100 min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="px-6 pt-8 flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Academic Planner
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">
              Tri-pillar Education
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center font-bold text-background-dark">
            Y
          </div>
        </header>

        {/* Week Strip */}
        <section className="mb-8">
          <div className="px-6 flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold">October 2023</h2>
            <span className="text-primary text-sm font-semibold">
              This Week
            </span>
          </div>

          <div className="flex overflow-x-auto px-6 space-x-4 scrollbar-hide">
            {/* Mon */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="text-[10px] font-bold uppercase opacity-50">
                Mon
              </span>
              <span className="text-lg font-bold">23</span>
            </div>

            {/* Tue Active */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-xl bg-primary text-background-dark shadow-lg shadow-primary/20">
              <span className="text-[10px] font-extrabold uppercase">Tue</span>
              <span className="text-lg font-extrabold">24</span>
              <div className="w-1 h-1 bg-background-dark rounded-full mt-1"></div>
            </div>

            {/* Wed */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="text-[10px] font-bold uppercase opacity-50">
                Wed
              </span>
              <span className="text-lg font-bold">25</span>
            </div>

            {/* Thu */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="text-[10px] font-bold uppercase opacity-50">
                Thu
              </span>
              <span className="text-lg font-bold">26</span>
            </div>

            {/* Fri */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <span className="text-[10px] font-bold uppercase opacity-50">
                Fri
              </span>
              <span className="text-lg font-bold">27</span>
            </div>
          </div>
        </section>

        {/* Upcoming Tasks */}
        <section className="px-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Upcoming Tasks</h2>
            <button className="text-primary text-xs font-semibold uppercase tracking-wider">
              See All
            </button>
          </div>

          <div className="space-y-3">
            {/* High */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border-l-4 border-primary shadow-sm flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase">
                    High Priority
                  </span>
                  <span className="text-xs text-slate-400">Due Tomorrow</span>
                </div>
                <h3 className="font-semibold text-sm">
                  Submit Data Structures Assignment
                </h3>
                <div className="flex items-center mt-2 text-slate-400 text-[11px]">
                  📁 CS201: Algorithms
                </div>
              </div>
              <span className="text-slate-300 dark:text-slate-600 text-xl">
                ›
              </span>
            </div>

            {/* Medium */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border-l-4 border-slate-400 shadow-sm flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 uppercase">
                    Medium
                  </span>
                  <span className="text-xs text-slate-400">Oct 26</span>
                </div>
                <h3 className="font-semibold text-sm">
                  Read Chapter 4: Macroeconomics
                </h3>
                <div className="flex items-center mt-2 text-slate-400 text-[11px]">
                  📁 EC102: Finance
                </div>
              </div>
              <span className="text-slate-300 dark:text-slate-600 text-xl">
                ›
              </span>
            </div>

            {/* Low */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border-l-4 border-blue-400 shadow-sm flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 uppercase">
                    Low
                  </span>
                  <span className="text-xs text-slate-400">Oct 28</span>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm">
                    Prepare Sports Psychology Deck
                  </h3>
                  <span className="text-blue-400 text-sm">💙</span>
                </div>

                <div className="flex items-center mt-2 text-slate-400 text-[11px]">
                  📁 HS210: Sports Science
                </div>
              </div>
              <span className="text-slate-300 dark:text-slate-600 text-xl">
                ›
              </span>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="px-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Course Modules</h2>
            <span className="text-slate-400 text-lg">▦</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Module 1 */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary">
                {"</>"}
              </div>
              <h4 className="font-bold text-sm mb-1">Comp Science</h4>
              <p className="text-[10px] text-slate-500 mb-3">
                Last access: 2h ago
              </p>
              <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%] rounded-full"></div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3 text-orange-500">
                💰
              </div>
              <h4 className="font-bold text-sm mb-1">Economics</h4>
              <p className="text-[10px] text-slate-500 mb-3">
                Last access: 5h ago
              </p>
              <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[40%] rounded-full"></div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 text-blue-500">
                🏋️
              </div>
              <h4 className="font-bold text-sm mb-1">Health Science</h4>
              <p className="text-[10px] text-slate-500 mb-3">
                Last access: 1d ago
              </p>
              <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[88%] rounded-full"></div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 text-purple-500">
                🧠
              </div>
              <h4 className="font-bold text-sm mb-1">Psychology</h4>
              <p className="text-[10px] text-slate-500 mb-3">
                Last access: 3d ago
              </p>
              <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[22%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating + Button */}
        <div className="fixed bottom-24 right-6">
          <button className="w-14 h-14 bg-primary text-background-dark rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 text-3xl">
            +
          </button>
        </div>

        {/* Bottom Nav */}
        <BottomNav active="education" />
      </div>
    </div>
  );
}
