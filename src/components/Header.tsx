import logoSkinTalon from '../assets/images/skintalon.png'
import avatar from '../assets/images/avatar.jpg'

export const Header = () => {
  return (
    <header className="h-[60px] bg-[#0b0d12] flex items-center justify-between px-6 border-b border-zinc-800 relative z-50">
      
      <div className="flex items-center gap-8">
        
        <div className="w-24 h-12 relative flex items-center">
          <img 
            className="absolute top-[-8px] left-0 h-20 max-w-none z-50 filter drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] object-contain" 
            src={logoSkinTalon} 
            alt="Logo SkinTalon" 
          />
        </div>

        <ul className="flex gap-6 text-white font-bold text-sm">
          <li className="cursor-pointer hover:text-fuchsia-700 transition duration-350">Market</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition duration-350">Trade</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition duration-350">Cases</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition duration-350">Upgrades</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search skins" 
            className="w-64 bg-[#141720] border border-zinc-800 rounded-lg px-4 py-1.5 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-fuchsia-700 transition" 
          />
        </div>

        <span className="bg-[#141720] px-3 py-1.5 border border-zinc-800 rounded-lg font-mono text-sm font-bold text-green-400">
          $ 00.00
        </span>

        <div className="w-8 h-8 rounded-full border border-fuchsia-700 bg-zinc-700 overflow-hidden cursor-pointer">
          <img src={avatar} alt="avatar steam" className="w-full h-full object-cover" />
        </div>
      </div>

    </header>
  )
}