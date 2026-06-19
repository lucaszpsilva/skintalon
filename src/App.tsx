import { Header } from "./components/Header"
import { MainImage } from "./components/MainImage"
import { SearchTypes } from "./components/SearchTypes"
import { Items } from "./components/Items"
import { Footer } from "./components/Footer"
import { Rarity } from "./components/Rarity"

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] flex flex-col justify-between">
      

      <div className="w-full">
        <Header />
        <MainImage />
        <SearchTypes />
        <Items />
        <Rarity />
      </div>

      {/* Bloco 2: O rodapé isolado (O Flexbox vai chutar ele lá pro final absoluto da tela) */}
      <Footer />

    </div>
  )
}

export default App