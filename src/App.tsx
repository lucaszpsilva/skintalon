import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { MainImage } from "./components/MainImage";
import { SearchTypes } from "./components/SearchTypes";
import { Rarity } from "./components/Rarity";
import { Items } from "./components/Items";
import { Footer } from "./components/Footer";

interface Skin {
  id: number;
  name: string;
  weapon: string;
  rarity: string;
  price: number;
  float: number;
  exterior: string;
  isStatTrak: boolean;
  itemType: string;
}

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  // 1. NOVO ESTADO: Controla a ordenação (padrão começa do menor para o maior)
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [skins, setSkins] = useState<Skin[]>([]);

  useEffect(() => {
    let url = "http://localhost:3001/skins";

    if (searchItem) {
      url = `http://localhost:3001/skins?name=${searchItem}`;
    } else if (selectedType) {
      url = `http://localhost:3001/skins?type=${selectedType}`;
    } else if (selectedRarity) {
      url = `http://localhost:3001/skins?rarity=${selectedRarity}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setSkins(data));
  }, [searchItem, selectedRarity, selectedType]);

  // 2. FUNÇÃO INTELIGENTE: Ordena o array de skins dinamicamente antes de renderizar
  const getSortedSkins = () => {
    // Fazemos uma cópia do array original usando o operador spread [...] para não quebrar o estado original
    const sorted = [...skins];
    
    if (sortOrder === "low-to-high") {
      return sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      return sorted.sort((a, b) => b.price - a.price);
    }
    
    return sorted;
  };

  // Guardamos o resultado da lista perfeitamente ordenada
  const orderedSkins = getSortedSkins();

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      <MainImage />

      <SearchTypes 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        totalItems={orderedSkins.length} 
      />
      
      <Items skins={orderedSkins} />
      <Rarity selectedRarity={selectedRarity} setSelectedRarity={setSelectedRarity} />
      <Footer />
    </div>
  );
}

export default App;