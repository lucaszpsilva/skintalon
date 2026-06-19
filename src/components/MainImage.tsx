import { Flame, ShoppingCart, Search } from 'lucide-react'

export const MainImage = () => {
  return (

    <div className="h-72 bg-[#0b0d12] border-y border-white/5 flex items-center justify-between px-20 relative">
      
     
      <div className="flex flex-col gap-3">
        
        
        <div className="flex items-center gap-2 text-fuchsia-700 font-semibold tracking-wider text-xs">
          <Flame className="w-4 h-4 fill-current" />
          <span>FEATURED DROP</span>
        </div>

        
        <h1 className="text-4xl font-bold tracking-wide">
          <span className="text-white">AWP </span>
          <span className="text-fuchsia-700">Gungnir</span>
        </h1>

        <p className="text-gray-500 font-medium text-sm">
          Factory New · Float 0.0055 · <span className="text-fuchsia-700 font-semibold">Covert</span>
        </p>

       
        <div className="flex items-center gap-4 mt-2">
          <span className="text-fuchsia-700 font-bold text-3xl tracking-wide">
            $3,450.00
          </span>
          
          <button className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors font-bold text-xs text-white rounded-md tracking-wider">
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>
          
        <button className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-bold text-xs text-gray-400 hover:text-white rounded-md tracking-wider">
            INSPECT 
            <Search className="w-3 h-3"/>
        </button>
        </div>

      </div>

      <div className="bg-white/[0.02] border border-white/5 text-gray-400 rounded-md px-6 py-3 text-sm flex items-center gap-6 shadow-xl mr-120">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">24h Volume:</span>
          <span className="font-bold text-green-400">$1.24M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Listed Skins:</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>
                <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Trades Today</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>
                <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Avg Price:</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>

      </div>

    </div>
  )
}