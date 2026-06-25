import logoSkinTalon from '../assets/images/skintalon.png'
import avatar from '../assets/images/avatar.jpg'
import { Search, ShoppingCart } from 'lucide-react'

interface HeaderProps {
  searchItem: string;
  setSearchItem: (value: string) => void;
}

export const Header = ({ searchItem, setSearchItem }: HeaderProps) => {
  return (
    <header className="h-[60px] bg-[#0b0d12] flex items-center justify-between px-6 border-b border-zinc-800 relative z-50">
      <div className="flex items-center gap-8">
        <div className="w-24 h-12 relative flex items-center">
          <img className="absolute top-[-8px] left-0 h-20 max-w-none z-50 object-contain" src={logoSkinTalon} alt="Logo" />
        </div>
        <ul className="flex gap-6 text-white font-bold text-sm">
          <li className="cursor-pointer hover:text-fuchsia-700 transition">Market</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition">Trade</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition">Cases</li>
          <li className="cursor-pointer hover:text-fuchsia-700 transition">Upgrades</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-zinc-500 pointer-events-none" />
          <input 
            type="text" 
            placeholder="Search skins" 
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} // Atualiza o estado lá no App.tsx!
            className="w-64 bg-[#141720] border border-zinc-800 rounded-lg pl-10 pr-4 py-1.5 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-fuchsia-700 transition" 
          />
        
        </div>
 
        <span className="bg-[#141720] px-5 py-1.5 border border-zinc-800 rounded-lg font-mono text-sm font-bold text-green-400">$ 00.00</span>
        <div className='relative cursor-pointer group'>
         <ShoppingCart className='w-9 h-9 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-xl transition duration-200' />
         <span className='absolute -top-1.5 -right-1.5 bg-orange-500 text-white font-bold font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0b0d12] shadow-md group-hover:scale-110 transition duration-200'>0</span>
        </div>
        <div className="w-8 h-8 rounded-full border border-fuchsia-700 bg-zinc-700 overflow-hidden cursor-pointer">
          
          <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};