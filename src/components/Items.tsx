export const Items = () => {
  return (
    <div className="w-full bg-[#0b0d12] px-20 py-6 flex flex-col gap-6">

      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        

        <div className="bg-[#141720] border border-zinc-800/60 rounded-xl overflow-hidden flex flex-col relative group hover:border-zinc-700 transition duration-300">
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
            <span className="px-1.5 py-0.5 bg-orange-600 text-white font-bold text-[10px] rounded tracking-wide uppercase">ST™</span>
          </div>
          <div className="w-full h-40 bg-zinc-900/40 relative flex items-center justify-center p-4 overflow-hidden">
            <div className="w-32 h-32 bg-zinc-800 rounded flex items-center justify-center text-zinc-600 font-bold text-xs">[Skin Image]</div>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
          </div>
          <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
            <div>
              <span className="text-red-500 font-semibold text-[11px] uppercase tracking-wider block">Covert</span>
              <h3 className="text-zinc-400 text-xs font-medium tracking-wide">AK-47</h3>
              <h2 className="text-white font-bold text-sm tracking-wide truncate">Asiimov</h2>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-1">
              <span className="font-bold text-green-500">FN</span>
              <span>0.0041</span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-800/40">
              <span className="text-white font-bold text-base tracking-wide">$89.50</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[10px] rounded uppercase tracking-wider transition-colors">Buy</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}