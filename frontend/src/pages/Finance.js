import BottomNav from "../components/BottomNav";

export default function Finance() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
          <div className="flex items-center justify-center w-12">
            <span className="text-3xl">👤</span>
          </div>

          <h2 className="text-lg font-bold flex-1 text-center tracking-tight">
            Finance Manager
          </h2>

          <div className="flex items-center justify-center w-12">
            <button className="flex items-center justify-center h-10 w-10 rounded-full bg-transparent">
              🔔
            </button>
          </div>
        </header>

        {/* Total Balance Card */}
        <section className="p-4">
          <div className="rounded-xl shadow-lg bg-white dark:bg-[#19332b] border border-slate-100 dark:border-none overflow-hidden">
            {/* Card Top Gradient */}
            <div className="aspect-[21/9] bg-gradient-to-br from-primary to-background-dark p-4 flex justify-between items-start">
              <span className="text-white/60 text-xl">📶</span>
              <span className="text-white/80 font-mono text-sm tracking-widest">
                TRI-PILLAR CARD
              </span>
            </div>

            {/* Card Content */}
            <div className="px-5 py-5">
              <p className="text-slate-500 dark:text-[#92c9b7] text-sm font-medium">
                Main Account •••• 4242
              </p>

              <p className="text-3xl font-extrabold mt-1">$2,450.80</p>

              <div className="flex justify-between items-center mt-3">
                <p className="text-slate-500 dark:text-[#92c9b7] text-sm">
                  Total Balance
                </p>

                <button className="h-8 px-4 rounded-lg bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition">
                  Analytics
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Budget */}
        <section className="px-4">
          <h3 className="text-lg font-bold pb-2 pt-2">Monthly Budget</h3>

          <div className="flex flex-col gap-3 p-4 bg-white dark:bg-[#19332b] rounded-xl shadow-sm border border-slate-100 dark:border-none">
            <div className="flex justify-between">
              <p className="text-base font-medium">Spent this month</p>
              <p className="text-sm font-bold">$450.00 / $600.00</p>
            </div>

            <div className="rounded-full bg-slate-200 dark:bg-[#326755] h-3 overflow-hidden">
              <div className="h-full rounded-full bg-primary w-[75%]"></div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-slate-500 dark:text-[#92c9b7] text-sm">
                $150.00 remaining
              </p>
              <p className="text-primary text-xs font-bold uppercase tracking-wider">
                On Track
              </p>
            </div>
          </div>
        </section>

        {/* Pay Tuition Button */}
        <section className="px-4 py-6">
          <button className="w-full h-14 rounded-xl bg-primary text-background-dark font-bold text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-3 hover:opacity-90 transition">
            💵 Pay Tuition Fees
          </button>
        </section>

        {/* Recent Transactions */}
        <section className="px-4 pb-24">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Transactions</h3>
            <button className="text-primary text-sm font-bold">See All</button>
          </div>

          <div className="space-y-3">
            {/* Transaction 1 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#19332b]/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center">
                  🍔
                </div>
                <div>
                  <p className="font-bold text-sm">Campus Cafeteria</p>
                  <p className="text-xs text-slate-500 dark:text-[#92c9b7]">
                    Food & Drinks • Today
                  </p>
                </div>
              </div>
              <p className="font-bold text-sm">-$12.50</p>
            </div>

            {/* Transaction 2 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#19332b]/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
                  📘
                </div>
                <div>
                  <p className="font-bold text-sm">University Bookstore</p>
                  <p className="text-xs text-slate-500 dark:text-[#92c9b7]">
                    Academic Supplies • Oct 24
                  </p>
                </div>
              </div>
              <p className="font-bold text-sm">-$85.00</p>
            </div>

            {/* Transaction 3 */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-[#19332b]/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
                  🚌
                </div>
                <div>
                  <p className="font-bold text-sm">City Transit</p>
                  <p className="text-xs text-slate-500 dark:text-[#92c9b7]">
                    Transport • Oct 23
                  </p>
                </div>
              </div>
              <p className="font-bold text-sm">-$2.00</p>
            </div>
          </div>
        </section>

        {/* Bottom Nav */}
        <BottomNav active="finance" />
      </div>
    </div>
  );
}

