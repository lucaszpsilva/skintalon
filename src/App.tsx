import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Rarity } from "./components/Rarity"; // Importe o seu componente de raridades aqui
import { MainImage } from "./components/MainImage";

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

function App() {
  const [searchItem, setSearchItem] = useState("");
  // 1. NOVO ESTADO: Guarda a raridade selecionada (ex: "Covert", "Mil-Spec")
  const [selectedRarity, setSelectedRarity] = useState("");
  const [skins, setSkins] = useState<Skin[]>([]);

  // 2. O Efeito agora escuta TANTO o input de texto QUANTO o clique da raridade
  useEffect(() => {
    let url = "http://localhost:3001/skins";

    // Se tiver texto digitado, adiciona o parâmetro de nome
    if (searchItem) {
      url = `http://localhost:3001/skins?name=${searchItem}`;
    } 
    // Se tiver raridade selecionada, adiciona o parâmetro de raridade
    else if (selectedRarity) {
      url = `http://localhost:3001/skins?rarity=${selectedRarity}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setSkins(data));
  }, [searchItem, selectedRarity]); // <-- Escuta os dois!

  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      
    {/* Banner do Destaque */}
      <MainImage />

      {/* função de alterar a raridade */}
      <Rarity selectedRarity={selectedRarity} setSelectedRarity={setSelectedRarity} />
      
      <Items skins={skins} />
    </div>
  );
}

export default App;