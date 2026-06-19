export const Rarity = () => {
    return (
        <div className="w-full bg-[#0b0d12] px-20 py-8 flex flex-col gap-3 border-t border-zinc-900/40">
  
 
  <span className="text-zinc-600 font-mono text-[11px] uppercase tracking-widest font-bold">
    Rarity Tiers
  </span>
  

  <div className="flex flex-wrap items-center gap-2">
    

    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-zinc-700/30 hover:border-zinc-500 rounded text-xs font-semibold text-zinc-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
      Consumer Grade
    </button>


    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-sky-900/30 hover:border-sky-700 rounded text-xs font-semibold text-sky-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
      Industrial Grade
    </button>

    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-blue-900/30 hover:border-blue-700 rounded text-xs font-semibold text-blue-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
      Mil-Spec
    </button>

    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-purple-900/30 hover:border-purple-700 rounded text-xs font-semibold text-purple-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
      Restricted
    </button>


    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-pink-900/30 hover:border-pink-700 rounded text-xs font-semibold text-pink-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-pink-500"></span>
      Classified
    </button>

    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-red-900/30 hover:border-red-700 rounded text-xs font-semibold text-red-400 transition-colors">
      <span className="w-2 h-2 rounded-full bg-red-500"></span>
      Covert
    </button>

    <button className="flex items-center gap-2 px-3 py-1.5 bg-[#141720] border border-amber-900/30 hover:border-amber-600 rounded text-xs font-semibold text-amber-500 transition-colors">
      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
      Contraband
    </button>

  </div>
</div>
    )
}