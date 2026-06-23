import { useEffect, useState } from "react";

interface Skin {
  id: number;
  name: string;
  weapon: string;
  rarity: string;
  price: number;
  float: number;
  exterior: string;
  isStatTrak: boolean;
}

export const Items = () => {
  // 2. Estado que vai começar com uma lista vazia e depois vai guardar as skins do backend
  const [skins, setSkins] = useState<Skin[]>([]);

  // 3. O useEffect roda uma vez assim que o componente entra na tela
  useEffect(() => {
    // Fazemos um 'fetch' (busca) na URL do seu servidor Node
    fetch("http://localhost:3001/skins")
      .then((response) => response.json()) // Transforma a resposta em JSON
      .then((data) => setSkins(data));    // Guarda os dados no nosso estado!
  }, []);

  return (
    <div className="w-full bg-[#0b0d12] px-20 py-6 flex flex-col gap-6">
      
      {/* Grid de Cards Dinâmico rodando o MAP */}
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        
        {skins.map((skin) => (
          <div 
            key={skin.id} 
            className="bg-[#141720] border border-zinc-800/60 rounded-xl overflow-hidden flex flex-col relative group hover:border-zinc-700 transition duration-300"
          >
            {/* Header do Card */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
              {skin.isStatTrak && (
                <span className="px-1.5 py-0.5 bg-orange-600 text-white font-bold text-[10px] rounded tracking-wide uppercase">
                  ST™
                </span>
              )}
            </div>

            {/* Imagem do Item */}
            <div className="w-full h-40 bg-zinc-900/40 relative flex items-center justify-center p-4 overflow-hidden">
              <div className="w-32 h-32 bg-zinc-800 rounded flex items-center justify-center text-zinc-600 font-bold text-xs">
                [Skin Image]
              </div>
              
              <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r to-transparent ${
                skin.rarity === 'Covert' ? 'from-red-500' :
                skin.rarity === 'Classified' ? 'from-pink-500' :
                skin.rarity === 'Restricted' ? 'from-purple-500' : 'from-blue-500'
              }`}></div>
            </div>

            {/* Corpo do Card */}
            <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
              <div>
                <span className={`font-semibold text-[11px] uppercase tracking-wider block ${
                  skin.rarity === 'Covert' ? 'text-red-500' :
                  skin.rarity === 'Classified' ? 'text-pink-500' :
                  skin.rarity === 'Restricted' ? 'text-purple-500' : 'text-blue-500'
                }`}>
                  {skin.rarity}
                </span>
                <h3 className="text-zinc-400 text-xs font-medium tracking-wide">
                  {skin.weapon}
                </h3>
                <h2 className="text-white font-bold text-sm tracking-wide truncate">
                  {skin.name}
                </h2>
              </div>

              {/* Condição e Float */}
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span className="font-bold text-green-500">{skin.exterior}</span>
                <span>{skin.float}</span>
              </div>

              {/* Preço e Botão */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-zinc-800/40">
                <span className="text-white font-bold text-base tracking-wide">
                  ${skin.price.toFixed(2)}
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[10px] rounded uppercase tracking-wider transition-colors">
                  Buy
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};