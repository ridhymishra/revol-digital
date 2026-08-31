export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-cyan-400 animate-spin" />
          <div className="absolute inset-[6px] rounded-full bg-blue-500/10 blur-md" />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase text-blue-300/70">
          Loading
        </span>
      </div>
    </div>
  );
}
