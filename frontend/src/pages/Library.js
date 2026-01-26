import BottomNav from "../components/BottomNav";

export default function Library() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-28">
      <div className="max-w-[430px] mx-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="size-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center">
              👤
            </div>

            <h1 className="text-lg font-bold flex-1 text-center">
              Resource Library
            </h1>

            <button className="size-10 rounded-lg flex items-center justify-center text-slate-600 dark:text-white hover:bg-white/10 transition">
              ⚙️
            </button>
          </div>
        </header>

        {/* Search */}
        <div className="px-4 py-4">
          <div className="flex items-center rounded-xl shadow-sm bg-white dark:bg-white/10 overflow-hidden">
            <div className="pl-4 pr-2 text-primary text-xl">🔍</div>
            <input
              className="w-full h-12 bg-transparent outline-none px-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
              placeholder="Search documents, guides, notes..."
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto">
          <div className="flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-5 shadow-sm shadow-primary/20">
            <span className="text-background-dark">🎓</span>
            <p className="text-background-dark text-sm font-bold">Education</p>
          </div>

          <div className="flex h-9 items-center justify-center gap-2 rounded-full bg-white dark:bg-white/10 px-5 border border-slate-200 dark:border-white/5">
            <span className="text-primary">💚</span>
            <p className="text-sm font-medium">Health</p>
          </div>

          <div className="flex h-9 items-center justify-center gap-2 rounded-full bg-white dark:bg-white/10 px-5 border border-slate-200 dark:border-white/5">
            <span className="text-primary">💳</span>
            <p className="text-sm font-medium">Finance</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-between px-4 pt-2 pb-2">
          <h3 className="text-xl font-bold">Categories</h3>
          <button className="text-primary text-sm font-semibold">
            See all
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Card 1 */}
          <CategoryCard
            title="Lecture Notes"
            count="248 Files"
            downloads="1.2k"
            icon="📄"
          />
          {/* Card 2 */}
          <CategoryCard
            title="Research Papers"
            count="124 Files"
            downloads="850"
            icon="📚"
          />
          {/* Card 3 */}
          <CategoryCard
            title="Shared by Peers"
            count="512 Files"
            downloads="3.4k"
            icon="👥"
          />
          {/* Card 4 */}
          <CategoryCard
            title="Guides & Templates"
            count="96 Files"
            downloads="2.1k"
            icon="📝"
          />
        </div>

        {/* Recently Added */}
        <div className="px-4 pt-2 pb-2">
          <h3 className="text-xl font-bold">Recently Added</h3>
        </div>

        <div className="px-4 space-y-3 pb-24">
          <FileItem
            icon="📕"
            title="Macroeconomics_Final_Notes.pdf"
            meta="2.4 MB • Added 2h ago"
            downloads="124"
          />
          <FileItem
            icon="📘"
            title="Financial_Literacy_Guide.docx"
            meta="1.1 MB • Added 5h ago"
            downloads="88"
          />
        </div>

        <BottomNav active="library" />
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function CategoryCard({ title, count, downloads, icon }) {
  return (
    <div className="relative overflow-hidden rounded-xl aspect-[4/5] shadow-lg bg-gradient-to-b from-background-dark/50 to-background-dark flex flex-col justify-end p-4">
      <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
        <span className="text-[12px] text-primary">⬇️</span>
        <span className="text-[10px] text-white font-bold">{downloads}</span>
      </div>

      <div className="text-primary mb-2 text-2xl">{icon}</div>
      <p className="text-white text-base font-bold leading-tight line-clamp-2">
        {title}
      </p>
      <p className="text-white/60 text-[10px] mt-1 uppercase tracking-wider font-semibold">
        {count}
      </p>
    </div>
  );
}

function FileItem({ icon, title, meta, downloads }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-[12px] text-slate-500 dark:text-white/40">{meta}</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <button className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          ⬇️
        </button>
        <span className="text-[10px] text-slate-400 dark:text-white/30">
          {downloads}
        </span>
      </div>
    </div>
  );
}
