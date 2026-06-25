import { Flame, ShoppingCart, Search } from 'lucide-react'
import gungnirBg from '../assets/images/gungnir.png'

export const MainImage = () => {
  return (
    <div className="h-72 bg-[#0b0d12] border-y border-white/5 flex items-center justify-between px-20 relative overflow-hidden bg-gradient-to-b from-purple-600/5 to-blue-500/5 ">
      
      {/* 1. CONTEÚDO DA ESQUERDA (z-10 garante que fica acima da arma) */}
      <div className="flex flex-col gap-3 relative z-10 max-w-lg">
        <div className="flex items-center gap-2 text-fuchsia-700 font-semibold tracking-wider text-xs">
          <Flame className="w-4 h-4 fill-current" />
          <span>FEATURED DROP</span>
        </div>

        <h1 className="text-4xl font-bold tracking-wide">
          <span className="text-white">AWP </span>
          <span className="text-fuchsia-700">Gungnir</span>
        </h1>

        <p className="text-gray-500 font-medium text-sm">
          Factory New · Float 0.0051 · <span className="text-fuchsia-700 font-semibold">Covert</span>
        </p>

        <div className="flex items-center gap-4 mt-2">
          <span className="text-fuchsia-700 font-bold text-3xl tracking-wide">
            $3,450.00
          </span>

          <button className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-fuchsia-700 hover:bg-fuchsia-800 transition-colors font-bold text-xs text-white rounded-md tracking-wider">
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>

          <a 
            href="steam://rungame/730/76561202255233023/+csgo_econ_action_preview%200010A8FFC289C301180920F405280630043894C2D0EA0340F6056219080310DB561D000000002D0000C0C13D22670F3D4500BC75BA6219080010DB561D000000002D000019433D8C9D9EBE451C9BADBD6219080210DB561D9A99193F2D0000E4C23D9C845EBD45AC6495BD6219080010DB561D000000002D0000C0C13D8A7916BE458092ACBD6219080010DB561D000000002D000025433DB481D6BD456489B3BDA2011C080010511D000000003D2CC775404580F1163F4D36E8134150C3C004ABA943E0"
            className="cursor-pointer flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-bold text-xs text-gray-400 hover:text-white rounded-md tracking-wider"
          >
            INSPECT
            <Search className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 2. BLOCO DE STATUS: Agora na Horizontal (flex-row) e flutuando com efeito blur de vidro */}
      <div className="absolute right-[30%] top-10 -translate-y-1/2 bg-white/[0.02] border border-white/5 text-gray-400 rounded-xl px-6 py-3 text-sm flex flex-row items-center gap-6 shadow-2xl z-20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">24h Volume:</span>
          <span className="font-bold text-green-400">$1.24M</span>
        </div>
        
        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Listed Skins:</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Trades Today:</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Avg Price:</span>
          <span className="font-bold text-fuchsia-700">48,291</span>
        </div>
      </div>

      {/* 3. IMAGEM DA AWP: Ocupa a metade direita inteira, por baixo dos status (z-10) */}
      <img 
        src={gungnirBg} 
        alt="AWP Gungnir Background" 
        className="absolute right-24 top-1/2 -translate-y-1/2 h-[120%] w-auto object-contain z-10 pointer-events-none select-none opacity-40 filter drop-shadow-[0_0_50px_rgba(162,28,175,0.15)]"
      />

    </div>
  )
}