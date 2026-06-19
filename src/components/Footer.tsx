export const Footer =() => {
    return (
    <footer className="w-full bg-[#08090d] border-t border-zinc-900 px-20 py-6 flex items-end justify-between mt-auto">
      
      {/* Informações da Marca */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-fuchsia-700 font-black text-lg">⚡</span>
          <span className="text-white font-black text-sm tracking-wider uppercase">
            SkinTalon<span className="text-fuchsia-700">.com</span>
          </span>
        </div>
        <p className="text-zinc-600 text-[11px] font-medium max-w-md leading-relaxed">
          Not affiliated with Valve Corporation. CS2™ is a trademark of Valve.
        </p>
      </div>

      {/* Links Institucionais */}
      <div className="flex items-center gap-6 text-xs text-zinc-500 font-semibold">
        <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-300 transition-colors">Support</a>
        <a href="#" className="hover:text-zinc-300 transition-colors">Discord</a>
      </div>

    </footer>
  )
}
