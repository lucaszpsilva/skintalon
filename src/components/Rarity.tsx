interface RarityProps {
  selectedRarity: string;
  setSelectedRarity: (value: string) => void;
}

export const Rarity = ({ selectedRarity, setSelectedRarity }: RarityProps) => {
  // Array com todas as raridades, suas respectivas cores de borda/texto e a cor da bolinha com brilho
  const tiers = [
    { name: "Consumer Grade", textClass: "text-[#b0c3d9]", dotClass: "bg-[#b0c3d9] shadow-[0_0_8px_#b0c3d9]", borderClass: "border-zinc-800" },
    { name: "Industrial Grade", textClass: "text-[#5e98d9]", dotClass: "bg-[#5e98d9] shadow-[0_0_8px_#5e98d9]", borderClass: "border-[#5e98d9]/30" },
    { name: "Mil-Spec", textClass: "text-[#4b69ff]", dotClass: "bg-[#4b69ff] shadow-[0_0_8px_#4b69ff]", borderClass: "border-[#4b69ff]/30" },
    { name: "Restricted", textClass: "text-[#8847ff]", dotClass: "bg-[#8847ff] shadow-[0_0_8px_#8847ff]", borderClass: "border-[#8847ff]/30" },
    { name: "Classified", textClass: "text-[#d32ce6]", dotClass: "bg-[#d32ce6] shadow-[0_0_8px_#d32ce6]", borderClass: "border-[#d32ce6]/30" },
    { name: "Covert", textClass: "text-[#eb4b4b]", dotClass: "bg-[#eb4b4b] shadow-[0_0_8px_#eb4b4b]", borderClass: "border-[#eb4b4b]/30" },
    { name: "Contraband", textClass: "text-[#e4ae39]", dotClass: "bg-[#e4ae39] shadow-[0_0_8px_#e4ae39]", borderClass: "border-[#e4ae39]/30" },
  ];

  return (
    <div className="flex flex-wrap gap-3 px-20 py-4 items-center">
      
      {/* Botão para limpar o filtro (All Tiers) */}
      <button 
        onClick={() => setSelectedRarity("")}
        className={`px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          selectedRarity === "" 
            ? 'bg-fuchsia-700 border-fuchsia-600 text-white shadow-[0_0_12px_rgba(162,28,175,0.4)]' 
            : 'bg-[#141720]/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
        }`}
      >
        All Tiers
      </button>

      {/* Mapeando os botões das raridades no padrão do CS */}
      {tiers.map((tier) => {
        const isSelected = selectedRarity === tier.name;

        return (
          <button
            key={tier.name}
            onClick={() => setSelectedRarity(tier.name)}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
              isSelected 
                ? 'bg-zinc-800/80 border-white/20 scale-[1.02] shadow-lg' 
                : `bg-[#111319] ${tier.borderClass} hover:bg-[#161922]`
            }`}
          >
            {/* A bolinha brilhante colorida */}
            <span className={`w-2.5 h-2.5 rounded-full ${tier.dotClass}`} />
            
            {/* O texto da raridade */}
            <span className={`${tier.textClass}`}>
              {tier.name}
            </span>
          </button>
        );
      })}

    </div>
  );
};