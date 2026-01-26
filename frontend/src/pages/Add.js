import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white p-4">
      <div className="max-w-[430px] mx-auto pt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="size-10 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center"
          >
            ←
          </button>
          <h2 className="text-lg font-bold">Quick Add</h2>
          <div className="size-10" />
        </div>

        {/* Cards */}
        <div className="space-y-3">
          <button
            onClick={() => alert("Next: Add Task")}
            className="w-full bg-white dark:bg-[#19332b] border border-slate-200 dark:border-white/10 rounded-xl p-4 text-left"
          >
            <p className="font-bold text-base">➕ Add Education Task</p>
            <p className="text-xs text-slate-500 dark:text-[#92c9b7] mt-1">
              Add assignment / deadline / reminder
            </p>
          </button>

          <button
            onClick={() => alert("Next: Add Health Goal")}
            className="w-full bg-white dark:bg-[#19332b] border border-slate-200 dark:border-white/10 rounded-xl p-4 text-left"
          >
            <p className="font-bold text-base">➕ Add Health Goal</p>
            <p className="text-xs text-slate-500 dark:text-[#92c9b7] mt-1">
              Water / steps / sleep goal
            </p>
          </button>

          <button
            onClick={() => alert("Next: Add Expense")}
            className="w-full bg-white dark:bg-[#19332b] border border-slate-200 dark:border-white/10 rounded-xl p-4 text-left"
          >
            <p className="font-bold text-base">➕ Add Expense</p>
            <p className="text-xs text-slate-500 dark:text-[#92c9b7] mt-1">
              Track spending & budgets
            </p>
          </button>

          <button
            onClick={() => alert("Next: Upload Resource")}
            className="w-full bg-white dark:bg-[#19332b] border border-slate-200 dark:border-white/10 rounded-xl p-4 text-left"
          >
            <p className="font-bold text-base">➕ Add Resource</p>
            <p className="text-xs text-slate-500 dark:text-[#92c9b7] mt-1">
              Save notes, PDFs, docs
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
