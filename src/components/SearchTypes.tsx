export const SearchTypes = () => {
    return (
       <div className="w-full bg-[#0b0d12] px-20 py-6 flex flex-col gap-4">
  

  <div className="flex items-center justify-between">
    

    <div className="flex items-center gap-2">
      <button className="px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        All Items
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Rifles
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Pistols
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Knives
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Gloves
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Smgs
      </button>
      <button className="px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded transition-colors tracking-wider">
        Heavy
      </button>
    </div>


    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs uppercase rounded focus:outline-none focus:border-fuchsia-700 transition-colors tracking-wider">
        <span className="inline-block w-3 h-3 border-b-2 border-r-2 border-current rotate-45 transform -translate-y-0.5"></span>
        Filters
      </button>

      <div className="relative">
        <select className="appearance-none bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs px-4 py-2 pr-8 rounded cursor-pointer focus:outline-none focus:border-fuchsia-700 transition-colors tracking-wider">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
          <span className="w-1.5 h-1.5 border-b-2 border-r-2 border-current rotate-45"></span>
        </div>
      </div>
    </div>

  </div>

  <div className="text-zinc-500 font-mono text-sm tracking-wide">
    12 items found
  </div>

</div>
    )
}