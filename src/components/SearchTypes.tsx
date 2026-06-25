interface SearchTypesProps {
  selectedType: string;
  setSelectedType: (value: string) => void;
  sortOrder: string;             
  setSortOrder: (value: string) => void;
  totalItems: number;
}

export const SearchTypes = ({ 
  selectedType, 
  setSelectedType, 
  sortOrder, 
  setSortOrder, 
  totalItems 
}: SearchTypesProps) => {
  
  const types = [
    { name: "Rifles", value: "Rifle" },
    { name: "Pistols", value: "Pistol" },
    { name: "Knives", value: "Knife" },
    { name: "Gloves", value: "Gloves" },
    { name: "Smgs", value: "Smg" },
    { name: "Heavy", value: "Heavy" },
  ];

  return (
    <div className="w-full bg-[#0b0d12] px-20 py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setSelectedType("")}
            className={`px-4 py-2 text-xs font-bold uppercase rounded transition-colors tracking-wider ${
              selectedType === ""
                ? 'bg-sky-500 hover:bg-sky-600 text-white'
                : 'bg-[#141720] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            All Items
          </button>

          {types.map((type) => {
            const isSelected = selectedType === type.value;
            return (
              <button
                key={type.name}
                onClick={() => setSelectedType(type.value)}
                className={`px-4 py-2 border text-xs font-bold uppercase rounded transition-colors tracking-wider ${
                  isSelected
                    ? 'bg-sky-500 border-zinc-800 text-white'
                    : 'bg-[#141720] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {type.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
         

          <div className="relative">
           
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-[#141720] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-bold text-xs px-4 py-2 pr-8  rounded cursor-pointer focus:outline-none focus:border-fuchsia-700 transition-colors tracking-wider"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
              <span className="w-1.5 h-1.5 border-b-2 border-r-2 border-current rotate-45"></span>
            </div>
          </div>
        </div>

      </div>

      <div className="text-zinc-500 font-mono text-sm tracking-wide">
        {totalItems} items found
      </div>
    </div>
  );
};