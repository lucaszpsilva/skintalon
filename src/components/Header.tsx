import logoSkinTalon from '../assets/images/skintalon.png'
import avatar from '../assets/images/avatar.jpg'

export const Header = () => {
    return (
        <header className="h-[60px] bg-[#0b0d12] flex items-center justify-between px-6 border-b border-zinc-800">
            
            {/* GRUPO DA ESQUERDA (Logo + Links) */}
            <div className="flex items-center gap-8">
                
                <img className='h-9 w-auto' src={logoSkinTalon} alt="Logo SkinTalon" />

                {/* LINKS DO MENU */}
                <ul className='flex gap-6 text-white font-bold text-sm'>
                    <li className='cursor-pointer hover:text-fuchsia-700 transition duration-350'>Market</li>
                    <li className='cursor-pointer hover:text-fuchsia-700 transition duration-350'>Trade</li>
                    <li className='cursor-pointer hover:text-fuchsia-700 transition duration-350'>Cases</li>
                    <li className='cursor-pointer hover:text-fuchsia-700 transition duration-350'>Upgrades</li>
                </ul>
            </div>

            {/* GRUPO DA DIREITA (Pesquisa + Saldo + Avatar) */}
            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <input 
                        type="text" 
                        placeholder='Search skins' 
                        className='w-64 bg-[#141720] border border-zinc-800 rounded-lg px-4 py-1.5 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-fuchsia-700 transition' 
                    />
                </div>

                <span className='bg-[#141720] px-3 py-1.5 border border-zinc-800 rounded-lg font-mono text-sm font-bold text-green-400'>
                    $ 00.00
                </span>

                <div className="w-8 h-8 rounded-full border border-fuchsia-700 bg-zinc-700 overflow-hidden cursor-pointer">
                    <img src={avatar} alt="avatar steam" className='w-full h-full object-cover'/>
                </div>
            </div>

        </header>
    )
}